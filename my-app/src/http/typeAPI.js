import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (name,cost) => {
    const {data} = await $authHost.post('/types', {name, cost})
    //localStorage.setItem('token', data.token)
    return data
}

export const putType = async (id,name,cost) => {
    const {data} = await $authHost.put('/types', {id,name, cost})
    //localStorage.setItem('token', data.token)
    return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost.delete('/types/'+id)
    //localStorage.setItem('token', data.token)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('/types')
    //localStorage.setItem('token', data.token)
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('/types/'+id)
    //localStorage.setItem('token', data.token)
    return data[0]
}

