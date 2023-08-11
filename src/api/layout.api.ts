import axiosreq from './http/index'
export function getMenu() {
    return axiosreq({
        url: '/json/menu.json',
        method: 'get',
    })
}