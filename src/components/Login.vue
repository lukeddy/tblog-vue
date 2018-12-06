<template>
    <div class="container main">
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">首页</router-link><span class="divider"></span></li>
                <li class="active">登录</li>
            </ul>
            <div class="row wrapper">
                <div class="col-sm-3">&nbsp;</div>
                <div class="col-sm-6">
                    <div v-if="serverError" class="alert alert-danger">{{ serverError }}</div>
                    <form action="#" @submit.prevent="login">
                        <h3 class="form-signin-header text-center">登录TBlog</h3>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">用户名:</div>
                                <input v-validate="'required'" data-vv-as="用户名" type="text" name="username" value="" v-model="username" class="form-control">
                            </div>
                            <span v-show="errors.has('username')" class="errors">{{ errors.first('username') }}</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                <input v-validate="'required'" data-vv-as="密码" name="password" type="password" value="" v-model="password" class="form-control">
                            </div>
                            <span v-show="errors.has('password')" class="errors">{{ errors.first('password') }}</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">验证码:</div>
                                <input type="text" name="validateCode" value="" class="form-control"
                                       style="display:inline-block;width:120px;margin-right:13px;" id="validateCode">
                                <img id="validateCodeImg" src="../assets/validateCode.jpeg">&nbsp;&nbsp;<a href="#"
                                                                                                           onclick="javascript:reloadValidateCode();">看不清？</a>
                            </div>
                        </div>
                        <div class="btn-group btn-group-justified" role="group" aria-label="...">
                            <div class="btn-group" role="group">
                                <button class="btn btn-success" type="submit">登录</button>
                            </div>
                            <div class="btn-group" role="group">
                                <button class="btn btn-default" type="reset">重置</button>
                            </div>
                        </div>
                        <br>
                        <p>没有账户？点击 <router-link to="/register">注册</router-link></p>
                    </form>
                </div>
                <div class="col-sm-3">&nbsp;</div>
            </div>
        </div>
        <Advertisement/>
    </div>
</template>

<script>
    import Advertisement from './Advertisement'

    export default {
        name: "Login",
        components:{
            Advertisement
        },
        data(){
            return {
                username: '',
                password: '',
                serverError: '',
            }
        },
        methods:{
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        //this.loading = true
                        this.$store.dispatch('doHttpLogin', {
                            username: this.username,
                            password: this.password,
                        })
                            .then(response => {
                                //this.loading = false
                                console.log(response)
                                this.$router.push({ path: '/' })
                            })
                            .catch(error => {
                                //this.loading = false
                                this.serverError=error.toString()
                                //this.serverError = error.response.data
                                // this.password = ''
                                //this.successMessage = ''
                            })
                        return;
                    }
                    alert("请输入账号信息")
                });
            }
        }
    }
</script>

<style scoped>
.errors{
    color:red;
    font-size:12px;
}
</style>