<template>
    <div>
        <le-button value="Login" type="save" @click="login"></le-button>
    </div>
</template>

<script>

import Ajax from "@util/http.js";
import {$cookie} from "@util/util.js";

export default {
    name:"Login",
    data(){
        return {}
    },
    methods:{
        login(){
            let uid = "";
            let pwd = "";
            Ajax.postFormData("/login",{userid:uid,password:pwd,lang:"en",code:""}).then(res=>{
                $cookie.setCookie("jid",res.data.jid);
                $cookie.setCookie("tid",res.data.tid);
                $cookie.setCookie("userName",res.data.uname);
                $cookie.setCookie("userid",uid);
            }).catch(err=>{
                    
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>

</style>