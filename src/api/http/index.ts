 
 
import axios,{AxiosResponse} from "axios";
import { message} from 'antd';

declare module 'axios' {
     export interface AxiosResponse<T = any> extends Promise<T> {}
 }
 
const Service = axios.create({
    timeout: 3000, //延迟时间
    baseURL: '/',
    responseType: 'json',
    validateStatus: status => true
});
 
//请求拦截
Service.interceptors.request.use((config) => config);
 
//响应拦截
Service.interceptors.response.use(
  (response:AxiosResponse):any => {
    const data = response.data
    if (data.code === 2000) {
      message.error(data.message || '未知错误！')
    } else {
      return data
    }
    
  },
  (err) => {
    message.error('请求失败，请检查网络！')
  }
);

export default Service