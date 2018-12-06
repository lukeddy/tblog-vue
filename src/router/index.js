import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import PostDetail from '../components/PostDetail'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import Category from '../components/admin/Category'
import CategoryAdd from '../components/admin/CategoryAdd'
import Post from '../components/admin/Post'
import Logout from '../components/Logout'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: Home},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path: '/post/:id', component: PostDetail},
        {path: '/about', component: About},
        {path: '/category', component: Category},
        {path: '/categoryadd', component: CategoryAdd},
        {path: '/post', component: Post},
        {path: '/logout', component: Logout},
    ]
})
