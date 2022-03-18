import axiosService from '../services/axios.service'

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

export function getUser(params = '') {
    const temp = `/${params}`
    return axiosService.get(baseUrl, temp)
}

export function addUser(body, token = '') {
    return axiosService.post(baseUrl, body)
}
