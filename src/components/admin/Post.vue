<template>
    <div class="container main">
        <Advertisement/>
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">首页</router-link><span class="divider"></span></li>
                <li class="active">帖子管理</li>
            </ul>
            <div class="panel">
                <div class="inner">
                    <div class="topic_content">
                        <div class="markdown-text">
                            <h3>帖子列表 <a href="/tblog/topic/create">【新增】</a> </h3>
                            <table class="table">
                                <tbody><tr>
                                    <th>帖子标题</th>
                                    <th>栏目</th>
                                    <th>创建日期</th>
                                    <th>更新日期</th>
                                    <th>操作</th>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5be6bbea07b5bd0f3ddf5fc4" target="_blank">hahahah </a>
                                    </td>
                                    <td>awesome</td>
                                    <td>2018-11-10 19:07:22</td>
                                    <td>2018-11-10 19:07:22</td>
                                    <td>
                                        <a href="/tblog/topic/5be6bbea07b5bd0f3ddf5fc4" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5be6bbea07b5bd0f3ddf5fc4">修改</a>
                                        <a href="/tblog/topic/del/5be6bbea07b5bd0f3ddf5fc4">删除</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5bd86cda02c259250649ea9c" target="_blank">测试APIasdfsfsd</a>
                                    </td>
                                    <td>golang</td>
                                    <td>2018-10-30 22:38:18</td>
                                    <td>2018-11-10 19:05:13</td>
                                    <td>
                                        <a href="/tblog/topic/5bd86cda02c259250649ea9c" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5bd86cda02c259250649ea9c">修改</a>
                                        <a href="/tblog/topic/del/5bd86cda02c259250649ea9c">删除</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5bc6ee760c083913e6e4aa59" target="_blank">golang</a>
                                    </td>
                                    <td>golang</td>
                                    <td>2018-10-17 16:10:30</td>
                                    <td>2018-10-17 16:10:30</td>
                                    <td>
                                        <a href="/tblog/topic/5bc6ee760c083913e6e4aa59" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5bc6ee760c083913e6e4aa59">修改</a>
                                        <a href="/tblog/topic/del/5bc6ee760c083913e6e4aa59">删除</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5ba66f0826378c0bb80d8325" target="_blank">文章栏目创建跑马灯，使用库改改</a>
                                    </td>
                                    <td>java</td>
                                    <td>2018-09-23 00:34:16</td>
                                    <td>2018-09-29 16:59:50</td>
                                    <td>
                                        <a href="/tblog/topic/5ba66f0826378c0bb80d8325" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5ba66f0826378c0bb80d8325">修改</a>
                                        <a href="/tblog/topic/del/5ba66f0826378c0bb80d8325">删除</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5b87d3dc3a0a0d0be6870ec4" target="_blank">spring-data-mongodb 对象关联 @DBRef学习 之疑问</a>
                                    </td>
                                    <td>angular</td>
                                    <td>2018-08-30 19:24:12</td>
                                    <td>2018-08-30 19:24:12</td>
                                    <td>
                                        <a href="/tblog/topic/5b87d3dc3a0a0d0be6870ec4" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5b87d3dc3a0a0d0be6870ec4">修改</a>
                                        <a href="/tblog/topic/del/5b87d3dc3a0a0d0be6870ec4">删除</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <a href="/tblog/topic/5b87cdc83a0a0d0b076978c1" target="_blank">hahaha啊啊啊啊</a>
                                    </td>
                                    <td>what the fuck</td>
                                    <td>2018-08-30 18:58:16</td>
                                    <td>2018-08-30 19:10:06</td>
                                    <td>
                                        <a href="/tblog/topic/5b87cdc83a0a0d0b076978c1" target="_blank">查看</a>
                                        <a href="/tblog/topic/edit/5b87cdc83a0a0d0b076978c1">修改</a>
                                        <a href="/tblog/topic/del/5b87cdc83a0a0d0b076978c1">删除</a>
                                    </td>
                                </tr>

                                </tbody></table>
                            <!--分页开始-->
                            <div>
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <!--在这里统一定义分页全局属性-->
                                        <li class="disabled"><span aria-hidden="true">«</span></li>
                                        <li class="active"><a href="/tblog/topic/list?pageSize=10&amp;pageNO=1&amp;null">1</a></li>
                                        <li class="disabled"><a>»</a></li>
                                        <li>
                                            <span>当前第1页,共1页</span>
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
        name: "Post",
        components:{
            Advertisement
        }
    }
</script>

<style scoped>

</style>