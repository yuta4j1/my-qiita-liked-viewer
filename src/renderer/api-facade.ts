import axiosBase, { AxiosPromise } from 'axios';
import { SourceArticleInfo } from './types';

const requestTo = 'http://localhost:8080/mql';

const defaultConfig = {
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
};

const axios = axiosBase.create({
  baseURL: requestTo,
  ...defaultConfig
});

export function get(url: string): Promise<SourceArticleInfo[]> | void {
  return new Promise<SourceArticleInfo[]>((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve(response.data);
      })
      .then(error => {
        console.log(error);
      });
  });
}
