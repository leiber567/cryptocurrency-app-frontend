import axios from 'axios';
import { getEnvironment } from '@/helpers/env';

export const useAppApi = () => {
  const appApi = axios.create({
    baseURL: `${getEnvironment().apiUrl}`,
  });
  appApi.interceptors.request.use(config => {
    config.headers = {
      ...config.headers,
    };
    return config;
  });
  appApi.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        return Promise.reject(error.response);
      } else {
        return Promise.reject(error);
      }
    },
  );
  return appApi;
};
