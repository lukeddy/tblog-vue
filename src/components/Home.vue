<template>
    <div>
        <Nav></Nav>
        <TopicList></TopicList>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from './Nav.vue';
import TopicList from './TopicList.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    TopicList,
    Footer
  }
}
</script>

