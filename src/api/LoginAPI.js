import Axios from 'axios'

const instance = Axios.create({
    baseURL: "http://192.168.1.151:8000/api/v1/users/",
    timeout: 100000,
    headers:{
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer token here' + "gjhgjggmkgk"
    }
});

const instance2 = Axios.create({
    baseURL: "http://localhost:8000/api/v1/users/",
    timeout: 100000,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…I6MX0.DVAKtwf7NiuupDTwHyMnCRkbi9GteFN1pxMX3M2Rsfs'
    }
})

export const LoginFunction ={
    login: (data) => instance.post("login/", data)
}

export const TokenFunction ={
    token: (data) => instance.post("token/", data)
}