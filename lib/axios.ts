import axios from 'axios'

export const instance = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL,
	params: {
		appid: process.env.EXPO_PUBLIC_API_KEY,
		units: 'metric',
	},
})
