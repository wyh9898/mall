import axios from 'axios'

//第一种：
//要求传入config,成功的回调函数：suc，以及失败的回调函数：fail
// export function request(config,suc,fail) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   });
//   instance(config)
//       .then((res) => {
//         suc(res);
//       })
//       .catch((err) => {
//         fail(err);
//       })
// }

//第二种：
// export function request(config) {
//   return new Promise((resolve,reject) => {
//     //创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     //调用axios的实例
//     instance(config)
//         .then((res) => {
//           //因为这里实现了resolve函数，所以，main.js调用处的.then()方法才会执行
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         })
//   })
// }

//最终版本
export function request(config) {
//  创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1请求拦截的作用（发送前拦截）
  //传入一个函数作为参数
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  // //  什么时候需要这样操作：？
  // //  1.当config中的一些信息不符合服务器的要求时
  // //  2.当每次发送网络请求时，都希望在界面中显示一个请求的图标
  // //  3.某些网络请求（如：登录（toekn）），必须携带一些特殊的信息
  // //  半道拦截下来进行处理之后要记得重新 return，否则请求就出错了
  //   return config
  // }, err => { //当拦截发生错误的时候，一般不会发生
  //   console.log(err);
  // })

  //2.2响应拦截（服务器返回信息后拦截）
  instance.interceptors.response.use((res) => {
  //  拦截成功
    console.log(res);
  //  拦截了进行处理之后要记得重新return，否则调用处拿不到数据
  //  可以起到将服务器返回的信息进行初步过滤的效果
    return res.data;
  }, err => {
  //  拦截失败
    console.log(err);
  })

  //因为调用instance()返回的结果本身就是一个Promise，所以，可以直接返回这个Promise对象，不用特地new一个
  return instance(config);
}
