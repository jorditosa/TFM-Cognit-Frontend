import axios from 'axios'

export const createUser = async (user) => {
	try {
		const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, user)
		return response.status
	} catch (error) {
		console.log(error)
	}
}

export const getUsers = async (token) => {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${token}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const updateUserInfo = async (info) => {
	try {
		const response = await axios.put(`${import.meta.env.VITE_API_URL}/users`, info)
		return response.status
	} catch (error) {
		console.log(error)
	}
}