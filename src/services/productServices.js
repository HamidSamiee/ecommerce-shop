import http from "./httpServices";

export function getProducts(){
    return http.get('/products').then(({data})=>data)
}