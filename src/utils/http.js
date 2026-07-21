import axios from 'axios';
import request from './request';

const http = {
  /**
   * GET 请求
   * @param {string} url - 接口地址
   * @param {object} params - 请求参数
   * @param {object} config - 额外配置
   */
  get: (url, params = {}, config = {}) => {
    return request({
      method: 'get',
      url,
      params,
      ...config,
    });
  },

  /**
   * POST 请求
   */
  post: (url, data = {}, config = {}) => {
    return request({
      method: 'post',
      url,
      data,
      ...config,
    });
  },

  /**
   * PUT 请求
   */
  put: (url, data = {}, config = {}) => {
    return request({
      method: 'put',
      url,
      data,
      ...config,
    });
  },

  /**
   * DELETE 请求
   */
  delete: (url, params = {}, config = {}) => {
    return request({
      method: 'delete',
      url,
      params,
      ...config,
    });
  },

  /**
   * PATCH 请求
   */
  patch: (url, data = {}, config = {}) => {
    return request({
      method: 'patch',
      url,
      data,
      ...config,
    });
  },

  /**
   * 文件上传
   */
  upload: (url, file, config = {}) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return request({
      method: 'post',
      url,
      data: formData,
      isFormData: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: config.onProgress,
      ...config,
    });
  },

  /**
   * 文件下载
   */
  download: (url, params = {}, config = {}) => {
    return request({
      method: 'get',
      url,
      params,
      responseType: 'blob',
      ...config,
    });
  },

  /**
   * 批量请求
   */
  all: (requests) => {
    return Promise.all(requests);
  },

  /**
   * 取消请求
   */
  cancel: (message = '请求已取消') => {
    const CancelToken = axios.CancelToken;
    return CancelToken.source(message);
  },
};

export default http;