import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// console.log("test");
// new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     //成功的时候调用resolve函数
//     // resolve("success");
//   //  失败的时候调用reject函数
//     reject("error")
//   },1000)
// }).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err)
// })

// 另一种写法
// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     // resolve('success');
//     reject('fail');
//   },1000)
// }).then((data)=>{
//   console.log(data);
// },(err) => {
//   console.log(err);
// })

//Promise的链式调用
// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('success1');
//   })
// }).then((data) => {
//   console.log(data, '第一层的10行代码');
//
//   return new Promise((resolve,reject) =>{
//     // resolve('success2');
//     reject('fail');
//   })
// }).then((data) => {
//   console.log(data, '第二层的十行的代码');
//
//   return new Promise((resolve) => {
//     resolve('success3');
//   })
// }).then(data => {
//   console.log(data, '第三层的十行代码');
// }).catch((err) => {
//   console.log(err);
// })
//简写
// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('success');
//   })
// }).then((data) => {
//   console.log(data,'第一层');
//
//   // return Promise.resolve('success2');
//   return Promise.reject('fail');
// }).then((data) => {
//   console.log(data);
//
//   return Promise.resolve('success3');
// }).then((data) => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })
//再简写
// new Promise((resolve,rejected) => {
//   setTimeout(() => {
//     resolve('success');
//   })
// }).then((data) => {
//   console.log(data,'第一层');
//
//   // return 'success2';
//   throw 'fail'
// }).then((data) => {
//   console.log(data);
//
//   return 'success3';
// }).then((data) => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

//Promise的all方法的使用
//可以封装多个网络请求
// Promise.all([
//     new Promise((resolve,reject) => {
//       //模拟异步请求
//       setTimeout(() => {
//         resolve({name: 'wyh', age: 16, height: 168});
//       },1000);
//     }),
//     new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve({gender: 'female', nationality: 'Chinese'});
//       },2000);
//     })
// ]).then(results => {
// //  results是一个数组，包含两个封装的Promise的结果
//     console.log(results);
// })

//axios的全局配置，也可以进行局部配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

//axios支持Promise的语法
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
//如果method是'post'，那么对应的应该是data:{} 而不是params: {}
// }).then((res) => {
//   console.log(res);
// })
//
// axios({
//   // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

//另一种发送get请求的方法
// axios.get('http://123.207.32.32:8000/category')
//     .then((res) => {
//       console.log(res);
//     }).catch((err) =>{
//   console.log(err);
// })
//有参数
// axios.get('http://123.207.32.32:8000/home/data',
//     {params:{type: 'sell', page: 1}})
//     .then((res) => {
//       console.log(res);
//     }).catch((err) => {
//       console.log(err);
// })

//axios处理并发请求
//axios.spread可以将数组展开,其参数也是一个函数
// axios.all([
//     axios({
//       url: '/home/multidata'
//     }),
//     axios({
//       url: '/home/data',
//       params: {
//         type: 'pop',
//         page: 1
//       }
//     })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

//创建对应的axios实例
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// });
// instance({
//   url: '/home/multidata',
// }).then((res) => {
//   console.log(res);
// })

import {request} from "./network/request"

//对应第一种
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

//对应第二种
// request({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

//对应最终版本
request({
  url: '/home/multidata'
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})


