<template>
    <ul class="post-list">
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
    </ul>
</template>

<script>
    import PostItem from './PostItem';

    export default {
        name: "PostList",
        components:{
            PostItem
        }
    }
</script>

<style scoped>
    .post-list {
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>