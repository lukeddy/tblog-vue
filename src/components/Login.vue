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
                    <form action="/tblog/login" method="post">
                        <h3 class="form-signin-header text-center">登录TBlog</h3>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">用户名:</div>
                                <input type="text" name="username" value="" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                <input name="password" type="password" value="" class="form-control">
                            </div>
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
        }
    }
</script>

<style scoped>

</style>