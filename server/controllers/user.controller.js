import axiosService from '../services/axios.service'

export function getUser(params = '') {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users'
    const temp = `/${params}`
    return axiosService.get(baseUrl, temp)
}
