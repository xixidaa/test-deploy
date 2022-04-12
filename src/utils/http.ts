import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
const request = axios.create({
    baseURL: 'https://test-serverless-red.vercel.app/'
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (err: any) => {
    Promise.reject(err)
})

request.interceptors.response.use((res: AxiosResponse) => {
    return res
}, (error: any) => {
    return Promise.reject(error)
})

export default request