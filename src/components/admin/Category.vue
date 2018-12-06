<template>
    <div class="container main">
        <Advertisement/>
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">首页</router-link><span class="divider"></span></li>
                <li class="active">栏目管理</li>
            </ul>
            <div class="panel">
                <div class="inner">
                    <div class="topic_content">
                        <div class="markdown-text">
                            <h3>已有栏目 <router-link to="/categoryadd">新增</router-link> </h3>
                            <table class="table">
                                <tbody><tr>
                                    <th>栏目名称</th>
                                    <th>目录</th>
                                    <th>创建日期</th>
                                    <th>更新日期</th>
                                    <th>操作</th>
                                </tr>

                                <tr>
                                    <td>aaaa</td>
                                    <td>aaaa</td>
                                    <td>2018-08-30 19:22:57</td>
                                    <td>2018-08-30 19:22:57</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b87d3913a0a0d0be6870ec3">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>ruby</td>
                                    <td>ruby</td>
                                    <td>2018-08-26 18:12:15</td>
                                    <td>2018-08-26 18:12:15</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827cff24995b078cb45aed">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>python</td>
                                    <td>python</td>
                                    <td>2018-08-26 18:11:58</td>
                                    <td>2018-08-26 18:11:58</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827cee24995b078cb45aec">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>node</td>
                                    <td>node</td>
                                    <td>2018-08-26 18:09:25</td>
                                    <td>2018-08-26 18:09:25</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827c5524995b078cb45aeb">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>swift</td>
                                    <td>swift</td>
                                    <td>2018-08-26 18:09:06</td>
                                    <td>2018-08-26 18:09:06</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827c4224995b078cb45aea">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>golang</td>
                                    <td>golang</td>
                                    <td>2018-08-26 18:00:02</td>
                                    <td>2018-08-26 18:00:02</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827a2224995b078cb45ae9">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>vue</td>
                                    <td>vue</td>
                                    <td>2018-08-26 17:59:55</td>
                                    <td>2018-08-26 17:59:55</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827a1b24995b078cb45ae8">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>react</td>
                                    <td>react</td>
                                    <td>2018-08-26 17:59:43</td>
                                    <td>2018-08-26 17:59:43</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827a0f24995b078cb45ae7">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>angular</td>
                                    <td>angular</td>
                                    <td>2018-08-26 17:59:36</td>
                                    <td>2018-08-26 17:59:36</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827a0824995b078cb45ae6">修改</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>php</td>
                                    <td>php</td>
                                    <td>2018-08-26 17:59:30</td>
                                    <td>2018-08-26 17:59:30</td>
                                    <td>
                                        <a href="/tblog/cat/edit/5b827a0224995b078cb45ae5">修改</a>
                                    </td>
                                </tr>

                                </tbody></table>
                            <!--分页开始-->
                            <div>
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <!--在这里统一定义分页全局属性-->
                                        <li class="disabled"><span aria-hidden="true">«</span></li>
                                        <li class="active"><a href="/tblog/cat/list?pageSize=10&amp;pageNO=1&amp;null">1</a></li>
                                        <li><a href="/tblog/cat/list?pageSize=10&amp;pageNO=2&amp;null">2</a></li>
                                        <li>
                                            <a href="/tblog/cat/list?pageSize=10&amp;pageNO=2&amp;null" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                        <li>
                                            <span>当前第1页,共2页</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!--分页结束-->
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
        name: "Category",
        components:{
            Advertisement
        }
    }
</script>

<style scoped>

</style>