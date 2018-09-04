<template>
    <div class="hello">
        <span id="modelBtn"
                data-am-modal="{target: '#my-modal-loading'}">
        </span>

        <div class="am-modal am-modal-loading am-modal-no-btn" tabindex="-1" id="my-modal-loading">
            <div class="am-modal-dialog">
                <div class="am-modal-hd">正在验效...</div>
                <div class="am-modal-bd">
                    <span class="am-icon-spinner am-icon-spin"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: 'hello',
        data() {
            return {
                key:this.$route.params.key
            }
        },
        mounted:function(){
            $("#modelBtn").click();
            console.log(" sessionToken 是："+this.key);
            var getkey=this.key;
            $.ajax({
                url: "http://61.183.86.6:9017/casclientproxy/proxy/SessionTokenValidateAction.a",
                type: "post",
                data: {
                     sessionToken:getkey
                },
                success: function (data) {
                    console.log("cas平台接口返回的信息是"+data);
                    if(data.error){
                        console.log(" 失败的信息是："+data.error_desc);
                    }
                    if(data.result){
                        console.log(" 成功的信息是："+data.content);
                        var getUsername=data.content;
                        // 根据username请求yigu后台接口 得到key值
                        var params = new URLSearchParams();
                        params.append("username", getUsername);
                        AXIOS.post('cas/getKey', params).then(response => {
                            console.log("第一个接口返回的信息："+response.data);
                            var newKey=response.data;
                            // 根据username和key值得到token uid等用户信息
                            var params = new URLSearchParams();
                            params.append("username", getUsername);
                            params.append("key", newKey);
                            AXIOS.post('cas/login', params).then(response => {
                                console.log("第二个接口返回的信息"+response.data);
                                console.log("token是："+response.data.token);
                                console.log("uid是："+response.data.sysUser.id);
                                sessionStorage.setItem("TID", response.data.token);
                                sessionStorage.setItem("UID", response.data.sysUser.id);
                                sessionStorage.setItem("loginCasType", 1);//cas平台登录类型为1，yigu为2
                                sessionStorage.setItem("psonImg", response.data.sysUser.avatar);
                                sessionStorage.setItem("psonName", response.data.sysUser.realName);
                                location.href = "/";
                            }).catch(e => {
                                this.errors.push(e)
                            });
                        }).catch(e => {
                            this.errors.push(e)
                        });
                    }
                },
                error: function (XMLHttpRequest, textStatus) {
                    console.log(" error信息是"+XMLHttpRequest.responseText);
                }
            })
        }
    }

</script>

<style scoped>

</style>