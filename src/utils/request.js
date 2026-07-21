import axios from 'axios';
import { message } from 'antd'; // 或使用其他 UI 库

const token = process.env.REACT_APP_MAP_TOKEN

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 30000,
  params: {language: 'zh-CN'},
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {

    // console.log('请求拦截器',config)
    // 添加 loading 状态  
    if (config.showLoading !== false) {
      // 可以在这里触发全局 loading
    }
    // 添加 Token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${process.env.REACT_APP_MAP_TOKEN}`;
    // }

    // 处理特殊请求头
    if (config.isFormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    // 添加时间戳防止缓存
    if (config.noCache) {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data, config } = response;
    return Promise.resolve(data)
  },
  (error) => {
    // 关闭 loading
    if (error.config?.showLoading !== false) {
      // 关闭全局 loading
    }

    // 请求取消的情况
    if (axios.isCancel(error)) {
      console.log('请求已取消:', error.message);
      return Promise.reject(error);
    }

    // HTTP 状态码错误处理
    if (!error.response) {
      // 网络错误
      message.error('网络连接异常，请检查网络设置');
      return Promise.reject(new Error('网络错误'));
    }

    const { status, data } = error.response;

    switch (status) {
      case 400:
        message.error(data?.message || '请求参数错误');
        break;
      case 401:
        localStorage.removeItem('token');
        window.location.href = '/login';
        message.error('登录已过期，请重新登录');
        break;
      case 403:
        message.error('没有权限访问该资源');
        break;
      case 404:
        message.error('请求的资源不存在');
        break;
      case 500:
        message.error('服务器内部错误');
        break;
      case 502:
        message.error('网关错误');
        break;
      case 503:
        message.error('服务暂时不可用');
        break;
      case 504:
        message.error('网关超时');
        break;
      default:
        message.error(data?.message || `请求失败 (${status})`);
    }

    return Promise.reject(error);
  }
);

export default service;