<template>
    <div class="container main">
        <Advertisement/>
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">首页</router-link><span class="divider"></span></li>
                <li><router-link to="/post">帖子管理</router-link><span class="divider"></span></li>
                <li class="active">修改帖子</li>
            </ul>
            <div class="panel">
                <div class="inner">
                    <Alert v-if="alertObj" :data="alertObj"/>
                    <h3>修改帖子</h3>
                    <form method="post" @submit.prevent="editPost">
                        <input type="hidden" name="thumbURL" id="thumbURL" value="">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">栏目:</div>
                                <select v-validate="'required'" data-vv-as="栏目" id="catId" v-model="post.category.id" name="catId" class="form-control">
                                    <option value="" selected="">---请先选择栏目---</option>
                                    <option v-for="(cat,index) in allCategory" :key="index"  :value="cat.id">{{cat.catName}}</option>
                                </select>
                            </div>
                            <span v-show="errors.has('catId')" class="errors">{{ errors.first('catId') }}</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">标题*:</div>
                                <input v-validate="'required'" data-vv-as="标题" type="text" v-model="post.title" name="title" class="form-control" placeholder="输入帖子标题" value="">
                            </div>
                            <span v-show="errors.has('title')" class="errors">{{ errors.first('title') }}</span>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">摘要:</div>
                                <textarea name="desc" class="form-control" v-model="post.desc" rows="3" placeholder="输入摘要"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">标签:</div>
                                <input type="text" name="tags" v-model="post.tags" class="form-control" placeholder="输入标签" value="">
                            </div>
                            <span class="label-info">注意：标签使用英文逗号分隔</span>
                        </div>

                        <div class="form-group">
                            <textarea v-validate="'required'" data-vv-as="内容" v-model="post.contentMD" name="contentMD" class="form-control" rows="4" placeholder="MarkDown内容"></textarea>
                        </div>
                        <span v-show="errors.has('contentMD')" class="errors">{{ errors.first('contentMD') }}</span>
                        <textarea name="contentHTML" v-model="post.contentHTML" class="form-control" rows="4" placeholder="HTML内容"></textarea>

                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="contentIsHTML" v-model="post.contentIsHTML" value="true"> 是否网页？
                            </label>
                            <label>
                                <input type="checkbox" name="top" value="true" v-model="post.top"> 置顶帖？
                            </label>
                            <label>
                                <input type="checkbox" name="good" value="true" v-model="post.good"> 精华帖？
                            </label>
                        </div>

                        <div class="form-group">
                            <div class="text-center">
                                <button class="btn btn-success" id="submit" type="submit">修改</button>
                                <button class="btn btn-default" type="reset">清空</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Advertisement from '../Advertisement'
    import Alert from '../Alert'

    export default {
        name: "PostEdit",
        components:{
            Advertisement,
            Alert
        },
        data(){
            return {
                allCategory:[],
                id:null,
                post:null,
                alertObj:null,
            }
        },
        mounted:function(){
            this.id=this.$route.params.id
            this.$store.dispatch('getPost',{id:this.id}).then((response) => {
                this.post=response.data.data
            }).catch(error => {
                this.alertObj={status:false,msg:error.toString()}
            })

            this.$store.dispatch('allCategory').then((response) => {
                this.allCategory=response.data.data
            }).catch(error => {
                this.alertObj={status:false,msg:error.toString()}
            })
        },
        methods:{
            editPost(){
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // this.loading = true
                        console.log(this.post)
                        var tags='';
                        if(this.post.tags!=null){
                            tags=this.post.tags.join(", ")
                        }
                        this.$store.dispatch('updatePost', {
                            id:this.id,
                            authorId:this.post.author.id,
                            catId:this.post.category.id,
                            title: this.post.title,
                            desc: this.post.desc,
                            tags:tags,
                            contentMD:this.post.contentMD,
                            contentHTML:this.post.contentHTML,
                            contentIsHTML:this.post.contentIsHTML,
                            top:this.post.top,
                            good:this.post.good,
                        })
                            .then((response) => {
                                //console.log(response.data)
                                this.alertObj=response.data
                            })
                            .catch(error => {
                                //this.loading = false
                                this.alertObj={status:false,msg:error.toString()}
                            })

                        return;
                    }
                    this.alertObj={status:false,msg:"请输入帖子信息"}
                });
            }
        }


    }
</script>

<style scoped>

</style>