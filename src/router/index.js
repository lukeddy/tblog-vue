import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import PostDetail from '../components/PostDetail'
import About from '../components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: Home},
        {path: '/post/:id', component: PostDetail},
        {path: '/about', component: About},
    ]
})
