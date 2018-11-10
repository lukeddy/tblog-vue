<template>
    <div class="container main">
        <ul class="breadcrumb">
            <li><router-link to="/">首页</router-link><span class="divider"></span></li>
            <li class="active">文章内容</li>
        </ul>
        <div class="col-md-9">
            <h1> {{ $route.params.id }}</h1>
        </div>
        <Advertisement/>
    </div>
</template>

<script>
    import Advertisement from './Advertisement'
    export default {
        name: "PostDetail",
        components:{
            Advertisement
        }
    }
</script>

<style scoped>

</style>