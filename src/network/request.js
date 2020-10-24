import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:"http://106.54.54.237:8000/api/wh"||"http://123.207.32.32:8000/api/wh",
        timeout: 5000
    })

// 2.axios的拦截器
// 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })

// 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}