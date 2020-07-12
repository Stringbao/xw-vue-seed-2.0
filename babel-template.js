const template = require('@babel/template').default
const generator = require('@babel/generator').default
const types = require('@babel/types')

/**
 * 构造模版代码
 * @param {any[]} data 
 */
const a2oTemplateString = data => `export default {${
    data.map((_item, index) => `%%name${index}%%: %%value${index}%%`).join(', ')
}}`

/**
 * 创建AJAX的AST节点
 * @param {*} url 
 */
const createAjaxNode = (url, type) => types.functionExpression(null, [], types.blockStatement([
    types.returnStatement(
        types.callExpression(
            types.identifier(`_vue_instance.ajax.${type}Fetch`),
            [types.stringLiteral(url)]
        )
    )
]))

/**
 * 构造模版映射
 * @param {{ name: string, value: any }[]} data 
 */
const a2oTemplateMap = (data) =>
    data.map(({ name, value, ajax = false, type = 'get' }, index) => {
        let valueNode = null
        // 根据value的数据类型或配置，构造对应的AST-NODE节点
        if(typeof value === 'number') {
            valueNode = types.numericLiteral(value)
        } else if(typeof value === 'string') {
            if(ajax) { // 配置差异
                valueNode = createAjaxNode(value, type)
            } else {
                valueNode = types.stringLiteral(value)
            }
        }
        return {
            [`name${index}`]:
                // 如果name名称安全，可以使用types.identifier创建属性名称
                types.stringLiteral(name),
            [`value${index}`]: valueNode
        }
    }).reduce((r, v) => ({ ...r, ...v }), {})


const gen = (data) => {
    const tplStr = a2oTemplateString(data)
    // console.log('-> [tplStr]', tplStr)
    const builder = template(tplStr)
    const tplMap = a2oTemplateMap(data)
    // console.log('-> [tplMap]', tplMap)
    const ast = builder(tplMap)
    const code = generator(ast).code
    // console.log('-> [code]', code)
    return code
}

const data = [
    { name: 'prop-a', value: 1 },
    { name: 'prop-b', value: '2' },
    { name: 'getSomeData', value: 'http://www.xxxx.com/api/get-something/a/b', ajax: true },
]

const code = gen(data)

console.log(code)

