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

    },
    mutations:{
        saveTokenToLocal(state, token) {
            state.token = token
        },
    },
    actions:{
        doHttpLogin(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    username: credentials.username,
                    password: credentials.password,
                })
                    .then(response => {
                        if(response.data.status==true){
                            const token = response.data.access_token
                            localStorage.setItem('access_token', token)
                            context.commit('saveTokenToLocal', token)
                            resolve(response)
                            // context.commit('addTodo', response.data)
                        }else{
                            reject(response.data.data)
                        }
                    })
                    .catch(error => {
                        //console.log(error)
                        reject(error)
                    })
            })
        },
    }
})