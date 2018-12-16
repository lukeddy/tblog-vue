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
                    <Alert v-if="alertObj" :data="alertObj"/>
                    <div class="topic_content">
                        <div class="markdown-text">
                            <h3>帖子列表 <router-link to="/postadd">新增</router-link>  </h3>
                            <table v-if="pager!=null" class="table">
                                <tbody><tr>
                                    <th>帖子标题</th>
                                    <th>栏目</th>
                                    <th>创建日期</th>
                                    <th>更新日期</th>
                                    <th>操作</th>
                                </tr>
                                <tr v-for="(post,index) in pager.content" :key="index">
                                    <td>
                                        <router-link v-bind:to="'/post/'+post.id">{{post.title}}</router-link>
                                    </td>
                                    <td>{{post.category.catName}}</td>
                                    <td>{{post.createAtFormatted}}</td>
                                    <td>{{post.updateAtFormatted}}</td>
                                    <td>
                                        <router-link v-bind:to="'/postedit/'+post.id">修改</router-link>&nbsp;
                                        <a @click="deletePost(post.id)">删除</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!--分页开始-->
                            <Pagination v-if="pager" v-on:parentJumpPage="jumpPage" :total-pages="pager.totalPages" :current-page="pager.number+1"/>
                            <!--分页结束-->
                        </div>
                        <div v-if="pager==null" class="text-center">暂无帖子</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Advertisement from '../Advertisement'
    import Alert from '../Alert'
    import Pagination from '../common/Pagination'
    export default {
        name: "Post",
        components:{
            Advertisement,
            Alert,
            Pagination,
        },
        data(){
            return {
                pager:null,
                alertObj:null,
            }
        },
        mounted:function(){
            this.$store.dispatch('listPost', {
                pageNO: 1,
            }).then((response) => {
                this.pager=response.data.data
            })
            .catch(error => {
                this.alertObj={status:false,msg:error.toString()}
            })

        },
        methods:{
            deletePost(postId){
                console.log(postId)
            },
            jumpPage(pageNo){
                this.$store.dispatch('listPost', {
                    pageNO: pageNo,
                }).then((response) => {
                    this.pager=response.data.data
                })
                .catch(error => {
                    this.alertObj={status:false,msg:error.toString()}
                })
            }
        }
    }
</script>

<style scoped>

</style>