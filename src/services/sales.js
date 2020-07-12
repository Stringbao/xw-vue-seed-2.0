

import Ajax from "@util/http.js";

export default {
    getSalesRoute(){
        return Ajax.get('/productAPI/index/queryList/190');
    },
    save(model){
        let url = "/productAPI/necSalesRoute/saveOrUpdate";
        let params = {
            channelCode:model.channelCode,
            materialNumber:model.materialNumber
        };
        model.code? params.code = model.code:"";

        return Ajax.postFormData(url, params);
    }
}