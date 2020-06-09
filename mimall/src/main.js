import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
//import env from './env'

//mock开关
const mock=false;
if(mock){
  require('./mock/api');
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL;

//接口错误拦截器
axios.interceptors.response.use(function(response){
  let res=response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(path != '#/index'){
      window.location.href = '/#/login';
    }
    
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  alert(res.data.message);
  return Promise.reject(error);
});


Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
