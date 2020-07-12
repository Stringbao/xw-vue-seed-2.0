

export default class SalesModel{
    constructor(){
        this.clear();
    }   

    get(){
        return {
            code:this.code,
            materialNumber:this.materialNumber,
            channelCode:this.channelCode,
            createBy:this.createBy,
            createTime:this.createTime,
            updateBy:this.updateBy,
            updateTime:this.updateTime,
        }
    }

    set(data){
        Object.assign(this, data);
    }

    clear(){
        this.code = "";
        this.materialNumber = "";
        this.channelCode = "";
        this.createBy = "";
        this.createTime = "";
        this.updateBy = "";
        this.updateTime = "";
    }
}