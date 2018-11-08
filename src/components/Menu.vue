<template>
    <div class="header">
        <a href="/tblog/?tab=all" class="topic-tab current-tab">全部</a>
        <a href="/tblog/?tab=java" class="topic-tab">Java</a>
        <a href="/tblog/?tab=vue" class="topic-tab">Vue</a>
        <a href="/tblog/?tab=php" class="topic-tab">php</a>
        <a href="/tblog/?tab=golang" class="topic-tab">golang</a>
        <a href="/tblog/?tab=nodejs" class="topic-tab">nodejs</a>
        <a href="/tblog/?tab=good" class="topic-tab">good</a>
        <a href="/tblog/?tab=nice" class="topic-tab">nice</a>
        <span class="dropdown">
                    <a href="#" class="dropdown-toggle topic-tab" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false">更多 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                            <li class="topic-tab">
                                <a href="/tblog/?tab=swift" class="topic-tab">swift</a>
                            </li>
                            <li class="topic-tab">
                                <a href="/tblog/?tab=python" class="topic-tab">python</a>
                            </li>
                            <li class="topic-tab">
                                <a href="/tblog/?tab=ruby" class="topic-tab">ruby</a>
                            </li>
                    </ul>
                </span>
    </div>
</template>
<script>
    export default {
        name: "Menu"
    }
</script>
<style>
    .topic-tab.current-tab {
        background-color: #80bd01;
        color: #fff;
        padding: 3px 4px;
        border-radius: 3px;
    }

    .topic-tab {
        margin: 0 10px;
        color: #80bd01;
    }
</style>


