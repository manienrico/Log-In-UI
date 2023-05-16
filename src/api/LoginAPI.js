import axios from 'axios'
import Axios from 'axios'
import { Formik } from 'formik';

const instance = Axios.create({
    baseURL: "http://127.0.0.1:8080/api/",
    timeout: 1000,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token here' + "gjhgjggmkgk"
    }
});

export const LoginFunction ={
    login: (data) => instance.post("login", data)
}