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
        <Advertisement/>
    </div>
</template>
<script>
    import Menu from "./Menu";
    import PostList from "./PostList";
    import Advertisement from './Advertisement'

    export default {
        name: "Main",
        components: {
            PostList,
            Menu,
            Advertisement
        }
    };
</script>

