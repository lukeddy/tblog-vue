import Vue from 'vue'
import router from './router'
import App from './App.vue'
import {store} from "./store/store"
import  VeeValidate from  "vee-validate"
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'



Vue.use(mavonEditor)

Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_CN', zh_CN);
VeeValidate.Validator.localize({
    zh_CN: {
        messages: {
            required: function (name) { return name + '不能为空' },
        }
    }
})
// VeeValidate.Validator.extend('isbn',{
//     getMessage: function () { return " 请输入正确格式的isbn号" },
//     validate: function (value) { return /^[\d-]*$/.test(value);}
// })
// VeeValidate.Validator.extend('pubYear', {
//     getMessage: function () { return " 请输入正确的年份" },
//     validate: function (value) { return /^(19|20)\d{2}$/.test(value); }
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
