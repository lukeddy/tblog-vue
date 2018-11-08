<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand hidden-sm" href="/tblog/">
                <span class="tblog-leaf-logo">&nbsp;</span>
            </a>
            <form class="navbar-form pull-right" action="/tblog/search">
                <div class="form-group hidden-xs">
                    <div class="input-group">
                        <div class="input-group-addon"><i class="glyphicon glyphicon-search"></i></div>
                        <input type="text" name="keywords" class="form-control" placeholder="">
                    </div>
                </div>
            </form>
        </div>
        <div class="navbar-collapse collapse pull-right">
            <ul class="nav navbar-nav">
                <li><a href="/tblog/">首页</a></li>
                <li><a href="/tblog/about">关于</a></li>
                <li><a href="/tblog/register">注册</a></li>
                <li><a href="/tblog/login">登陆</a></li>
                
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Nav"
}
</script>
<style>
.tblog-leaf-logo {
    display: block;
    width: 120px;
    height: 53px;
    background-size: cover;
    background-image: url(../assets/tblog-leaf-logo3.png);
    margin-left: 36px;
    margin-top: -18px;
}
</style>