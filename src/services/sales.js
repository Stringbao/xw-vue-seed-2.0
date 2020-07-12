

import Ajax from "@util/http.js";

const map = {
    SalesRoute:"/productAPI/index/queryList/190",
    create:"/productAPI/necSalesRoute/saveOrUpdate",
    update:"/productAPI/necSalesRoute/saveOrUpdate",
    remove:"/productAPI/necSalesRoute/saveOrUpdate",
    detail:"/productAPI/necSalesRoute/saveOrUpdate",
    list:"/productAPI/necSalesRoute/saveOrUpdate"
}

export default {
    getSalesRoute(){
        return Ajax.get(map.SalesRoute);
    },
    save(model){
        if(model.code){
            return this.update(model);
        }else{
            return this.create(model);
        }
    },
    create(model){
        let params = {
            channelCode:model.channelCode,
            materialNumber:model.materialNumber
        };
        return Ajax.postFormData(map.create, params);
    },
    update(model){
        let params = {
            channelCode:model.channelCode,
            materialNumber:model.materialNumber,
            code:model.code
        };
        return Ajax.postFormData(map.update, params);
    },
    remove(model){
        let params = {};
        return Ajax.postFormData(map.remove, params);
    },
    list(){
        return Ajax.get(map.list);
    },
    detail(model){
        let params = {};
        return Ajax.get(map.detail,params);
    }
}