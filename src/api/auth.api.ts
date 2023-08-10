import axiosreq from './http/index'
export function login(data:object) {
    return axiosreq({
        url: '/json/auth.json',
        method: 'get',
        data: data
    })
}