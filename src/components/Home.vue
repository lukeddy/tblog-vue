<template>
    <div>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from './Nav.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    Main,
    Footer
  }
}
</script>

