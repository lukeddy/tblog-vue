<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body{
  background-color: #e1e1e1;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
#app {
  margin-top: 80px;
}
.panel {
  margin-bottom: 13px
}

.panel .header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0
}

.panel .header.topic-header,.panel .inner {
  background-color: #fff
}

.panel .moon {
  padding: 10px
}

.panel .moon_tags {
  padding-left: 10px
}

.panel .inner {
  padding: 10px;
  border-radius: 0 0 3px 3px
}
</style>
