<template>
    <div class="container main">
        <Advertisement/>
        <div class="col-md-9">
            <ul class="breadcrumb">
                <li><router-link to="/">首页</router-link><span class="divider"></span></li>
                <li><router-link to="/post">帖子管理</router-link><span class="divider"></span></li>
                <li class="active">新建帖子</li>
            </ul>
            <div class="panel">
                <div class="inner">
                    <Alert v-if="alertObj" :data="alertObj"/>
                    <h3>新建帖子</h3>
                    <form method="post" @submit.prevent="addPost">
                        <input type="hidden" name="thumbURL" id="thumbURL" value="">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">栏目:</div>
                                <select v-validate="'required'" data-vv-as="栏目" id="catId" v-model="catId" name="catId" class="form-control">
                                    <option value="" selected="">---请先选择栏目---</option>
                                    <option v-for="(cat,index) in allCategory" :key="index"  :value="cat.id">{{cat.catName}}</option>
                                </select>
                            </div>
                            <span v-show="errors.has('catId')" class="errors">{{ errors.first('catId') }}</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">标题*:</div>
                                <input v-validate="'required'" data-vv-as="标题" type="text" v-model="title" name="title" class="form-control" placeholder="输入帖子标题" value="">
                            </div>
                            <span v-show="errors.has('title')" class="errors">{{ errors.first('title') }}</span>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">摘要:</div>
                                <textarea name="desc" class="form-control" v-model="desc" rows="3" placeholder="输入摘要"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon">标签:</div>
                                <input type="text" name="tags" v-model="tags" class="form-control" placeholder="输入标签" value="">
                            </div>
                            <span class="label-info">注意：标签使用英文逗号分隔</span>
                        </div>

                        <div class="form-group">
                            <mavon-editor v-validate="'required'" data-vv-as="内容" v-model="contentMD" ref=editor @imgAdd="uploadImage" placeholder="帖子内容..."/>
                            <!--<textarea v-validate="'required'" data-vv-as="内容" v-model="contentMD" name="contentMD" class="form-control" rows="4" placeholder="MarkDown内容"></textarea>-->
                        </div>
                        <span v-show="errors.has('contentMD')" class="errors">{{ errors.first('contentMD') }}</span>
                        <!--<textarea name="contentHTML" v-model="contentHTML" class="form-control" rows="4" placeholder="HTML内容"></textarea>-->
、
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="contentIsHTML" v-model="contentIsHTML" value="true"> 是否网页？
                            </label>
                            <label>
                                <input type="checkbox" name="top" value="true" v-model="top"> 置顶帖？
                            </label>
                            <label>
                                <input type="checkbox" name="good" value="true" v-model="good"> 精华帖？
                            </label>
                        </div>

                        <div class="form-group">
                            <div class="text-center">
                                <input type="hidden" name="authorId" value="5b616fa705bbe40c86a7f804">
                                <input type="hidden" name="authorName" value="admin">
                                <button class="btn btn-success" id="submit" type="submit">新建</button>
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
        name: "PostAdd",
        components:{
            Advertisement,
            Alert
        },
        data(){
            return {
                allCategory:[],
                authorId:'',
                authorName:'',
                catId:'',
                title: '',
                desc: '',
                tags:'',
                contentMD:'',
                contentHTML:'',
                contentIsHTML:false,
                top:false,
                good:false,
                alertObj:null,
            }
        },
        mounted:function(){
            this.$store.dispatch('allCategory').then((response) => {
                this.allCategory=response.data.data
            }).catch(error => {
                this.alertObj={status:false,msg:error.toString()}
            })

            this.$store.dispatch('getUserInfo').then((response) => {
                this.authorId=response.data.data.uid
                this.authorName=response.data.data.username
            }).catch(error => {
                this.alertObj={status:false,msg:error.toString()}
            })

        },
        methods:{
            addPost(){
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // this.loading = true
                        this.$store.dispatch('addPost', {
                            authorId:this.authorId,
                            authorName:this.authorName,
                            catId:this.catId,
                            title: this.title,
                            desc: this.desc,
                            tags:this.tags,
                            contentMD:this.contentMD,
                            contentHTML:this.$refs.editor.d_render,
                            contentIsHTML:this.contentIsHTML,
                            top:this.top,
                            good:this.good,
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
            },
            uploadImage(pos, $file){
                //第一步.将图片上传到服务器.
                const data = new FormData();
                data.append('file', $file);

                this.$store.dispatch('uploadFile',data).then((response) => {
                    //console.log(response.data)
                    //第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
                    this.$refs.editor.$img2Url(pos, response.data.data);
                }).catch(error => {
                    this.alertObj={status:false,msg:error.toString()}
                })
            }
        }


    }
</script>

<style scoped>

</style>