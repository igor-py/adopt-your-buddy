import axios from 'axios'

const teste = false;
const SERVER_URL =
    teste == 'development'
        ? 'http://localhost:8080'
        : 'https://adoptyourbuddypetapp.herokuapp.com'
const instance = axios.create({ baseURL: SERVER_URL })
const REGISTER_API_URL = '/api/pets/register'
const GET_API_URL = '/api/pets'
const GET_BY_ID_API_URL = '/api/pets/pet'

// Register Pet
const register = async (userData) => {
    const response = await instance.post(REGISTER_API_URL, userData)

    if (response.data) {
        console.log('Response data ', response.data)
        // localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Get all pets
const getAll = async () => {
    const response = await instance.post(GET_API_URL, {})

    if (response.data) {
        return response.data.data
    }
}

// Get pet by ID
const getPet = async (Id) => {
    const response = await instance.post(GET_BY_ID_API_URL, { id: Id })

    if (response.data) {
        return response.data.data
    }
}

const authService = {
    register,
    getAll,
    getPet,
}

export default authService
