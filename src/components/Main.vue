<template>
    <div class="container main">
        <div class="col-md-9">
            <div class="panel">
                <Menu></Menu>
                <div class="inner no-padding">
                    <PostList></PostList>
                    <!--分页开始-->
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <!--在这里统一定义分页全局属性-->

                            <li class="disabled"><span aria-hidden="true">«</span></li>


                            <li class="active"><a href="/tblog/?pageSize=30&amp;pageNO=1&amp;tab=all">1</a></li>


                            <li class="disabled"><a>»</a></li>


                            <li>
                                <span>当前第1页,共1页</span>
                            </li>
                        </ul>
                    </nav>
                    <!--分页结束-->
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="panel">
                <div class="header">
                    <span class="col_fade">关于</span>
                </div>
                <div class="inner">
                    <p>TBlog：tblog开源博客</p>

                    <p>在这里你可以：</p>
                    <ul>
                        <li>提出由建设性的建议</li>
                        <li>随意修改代码，修改成您需要的风格</li>
                        <li>分享给您的朋友</li>
                    </ul>
                </div>
            </div>
            <div class="panel">
                <div class="header">
                    <span class="col_fade">广告</span>
                </div>
                <div class="inner ads">
                    <a href="javascript:;" target="_blank" class="banner">
                        <img alt="Vue logo" src="../assets/logo.png">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from "./Menu";
    import PostList from "./PostList";

    export default {
        name: "Main",
        components: {
            PostList,
            Menu
        }
    };
</script>

