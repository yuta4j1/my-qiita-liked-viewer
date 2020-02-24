import axiosBase from 'axios'
import { SourceArticleInfo } from './types'

const requestTo = 'http://localhost:8080/mql'

const defaultConfig = {
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
}

const requestFactory = (baseURL: string) =>
  axiosBase.create({
    baseURL,
    ...defaultConfig
  })

export function fetchArticleList(
  url: string
): Promise<SourceArticleInfo[]> | undefined {
  return new Promise<SourceArticleInfo[]>((resolve, reject) => {
    requestFactory(requestTo)
      .get(url)
      .then(response => {
        resolve(response.data)
      })
      .then(error => {
        console.log(error)
        reject(error)
      })
  })
}

const qiitaApiUrl = 'https://qiita.com/api/v2'

export function fetchUser(uid: string): Promise<any> | undefined {
  return new Promise<any>(resolve => {
    requestFactory(qiitaApiUrl)
      .get(`users/${uid}`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        throw error
      })
  })
}
