import Loader from '@/components/loader'
import Weather from '@/components/weather'
import { instance } from '@/lib/axios'
import { WeatherType } from '@/types'
import * as Location from 'expo-location'
import React from 'react'
import { Alert } from 'react-native'

const Welcome = () => {
	const [isLoading, setLoading] = React.useState<boolean>(true)
	const [location, setLocation] = React.useState({} as WeatherType)
	const [search, setSearch] = React.useState<string>('')

	const handleSearch = async () => {
		try {
			const { data } = await instance.get('?q=' + search)

			setLocation({
				name: data.name,
			temp: data.main.temp,
			temp_low: data.main.temp_min,
			temp_high: data.main.temp_max,
			condition: data.weather[0].description,
			icon: data.weather[0].icon,
			})
		} catch (error) {
			Alert.alert("I can't find your location, please try again")
		}
	}

	const getWeather = async (latitude: number, longitude: number) => {
		const { data } = await instance.get(`?lat=${latitude}&lon=${longitude}`)

		setLocation({
			name: data.name,
			temp: data.main.temp,
			temp_low: data.main.temp_min,
			temp_high: data.main.temp_max,
			condition: data.weather[0].description,
			icon: data.weather[0].icon,
		})

		setLoading(false)
	}

	const getLocation = async () => {
		try {
			const res = await Location.requestForegroundPermissionsAsync()

			if (res.status !== 'granted') {
				Alert.alert('Permission to access location was denied')
				return
			}

			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync({})

			getWeather(latitude, longitude)
		} catch (error) {
			Alert.alert("I can't get your location, please try again")
		}
	}

	React.useEffect(() => {
		getLocation()
	}, [])

	return isLoading ? <Loader /> : <Weather {...location} handleSearch={handleSearch} search={search} setSearch={setSearch} />
}

export default Welcome
