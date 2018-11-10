import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import PostDetail from '../components/PostDetail'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: Home},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path: '/post/:id', component: PostDetail},
        {path: '/about', component: About},
    ]
})
