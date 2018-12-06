import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)
axios.defaults.baseURL='http://localhost:8080/tblog/api'

export const store=new Vuex.Store({
    state:{
      token:localStorage.getItem("access_token")|null,
      posts:[],

    },
    getters:{
        isLoggedIn(state) {
            return state.token !== null
        },
    },
    mutations:{
        saveTokenToLocal(state, token) {
            state.token = token
        },
        logout(state) {
            state.token = null
        },
    },
    actions:{
        doHttpLogin(context, credentials) {
            return new Promise((resolve, reject) => {
                const params={
                    username: credentials.username,
                    password: credentials.password,
                }

                axios.post('/login',params).then(response => {
                        if(response.status==200){
                            const token = response.data
                            localStorage.setItem('access_token', token)
                            context.commit('saveTokenToLocal', token)
                            resolve(response)
                        }else{
                            reject(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        logout(context) {
            axios.defaults.headers.common['Authorization'] = context.state.token

            if (context.getters.isLoggedIn) {
                return new Promise((resolve, reject) => {
                    //console.log(axios.defaults.headers)
                    axios.post('/logout')
                        .then(response => {
                            localStorage.removeItem('access_token')
                            context.commit('logout')
                            resolve(response)
                        })
                        .catch(error => {
                            localStorage.removeItem('access_token')
                            context.commit('logout')
                            reject(error)
                        })
                })
            }
        },
    }
})