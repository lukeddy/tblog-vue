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
    },
    actions:{
        doHttpLogin(context, credentials) {
            return new Promise((resolve, reject) => {
                const params={
                    username: credentials.username,
                    password: credentials.password,
                }
                // const config={
                //     headers:{'Content-type': 'application/x-www-form-urlencoded'}
                // }

                axios.post('/login',params).then(response => {
                        //console.log(response)
                        if(response.status==200){
                            const token = response.data.token
                            localStorage.setItem('access_token', token)
                            context.commit('saveTokenToLocal', token)
                            resolve(response)
                            // context.commit('addTodo', response.data)
                        }else{
                            reject(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    }
})