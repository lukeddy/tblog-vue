<template>
    <div class="container main">
        <Advertisement/>
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">主页</router-link><span class="divider"></span></li>
                <li><router-link to="/category">管理栏目</router-link><span class="divider"></span></li>
                <li class="active">新建栏目</li>
            </ul>
            <div class="panel">
                <div class="inner">
                    <div class="topic_content">
                        <div class="markdown-text">
                            <h3>新建栏目</h3>
                            <div class="row">
                                <form method="post" action="/tblog/cat/create">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">栏目名称:</div>
                                            <input type="text" class="form-control" name="catName" value="" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">目录名称（小写英文字母）:</div>
                                            <input type="text" class="form-control" name="catDir" value="" placeholder="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-addon">目录简介:</div>
                                            <textarea name="catDesc" class="form-control" rows="4" placeholder="请输入栏目简介，方便SEO优化"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="text-center">
                                            <button class="btn btn-success" type="submit">新建</button>
                                            <button class="btn btn-default" type="reset">清空</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Advertisement from '../Advertisement'
    export default {
        name: "CategoryAdd",
        components:{
            Advertisement
        }
    }
</script>

<style scoped>

</style>