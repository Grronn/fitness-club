import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createSpec = async (name,surname,patronymic,date,specialization,phone_number) => {
    const {data} = await $authHost.post('/spec', {name,surname,patronymic,date,specialization,phone_number})
    //localStorage.setItem('token', data.token)
    return data
}

export const fetchSpecs = async () => {
    const {data} = await $host.get('/spec')
    //localStorage.setItem('token', data.token)
    return data
}

export const putSpec= async (id,name,surname,patronymic,date,specialization,phone_number) => {
    const {data} = await $authHost.put('/spec', {id,name,surname,patronymic,date,specialization,phone_number})
    //localStorage.setItem('token', data.token)
    return data
}

export const deleteSpec = async (id) => {
    const {data} = await $authHost.delete('/spec/'+id)
    //localStorage.setItem('token', data.token)
    return data
}

export const fetchOneSpec= async (id) => {
    const {data} = await $host.get('/spec/'+id)
    //localStorage.setItem('token', data.token)
    return data[0]
}
