import axiosBase, { AxiosPromise } from 'axios';
import { resolve } from 'path';

const requestTo = 'http://localhost:8080/mql';
const defaultConfig = {
    timeout: 20000,
    headers: {
        "Content-Type": "application/json"
    },
    responseType: 'json'
}
const axios = axiosBase.create({
    baseURL: requestTo,
    ...defaultConfig
});
export function get(url: string): AxiosPromise<any> | void {
    axios.get(url).then((response) => {
        console.log(response);
        resolve(JSON.stringify(response));
    }).then((error) => {
        console.log(error);
    });

}