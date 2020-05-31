import axios from 'axios'
import { AsyncStorage } from 'react-native'

const instance = axios.create({
    baseURL: 'https://c6fb60019e16.ngrok.io'
})

instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        // console.log(token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance
