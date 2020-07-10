

import Ajax from "@util/http.js";

export default {
    async getSalesRoute(){
        return await Ajax.get('/productAPI/index/queryList/190');
    },
    async save(model){
        let url = "/productAPI/necSalesRoute/saveOrUpdate";
        let params = {
            channelCode:model.channelCode,
            materialNumber:model.materialNumber
        };
        model.code? params.code = model.code:"";

        return await Ajax.postFormData(url, params);
    }
}