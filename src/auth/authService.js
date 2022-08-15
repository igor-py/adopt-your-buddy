import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:8080'})
const API_URL = '/api/users/login'

// Register user
const register = async (userData) => {
    const response = await instance.post(API_URL, userData)
    console.log('Response --> ', response)

    if(response.data) {
        console.log('Response data ', response.data)
        // localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService