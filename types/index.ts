export type WeatherType = {
	name: string
	temp: number
	temp_low: number
	temp_high: number
	condition: string
	icon: string
}

export type WeatherProps=  {
	name: string
	temp: number
	condition: string
	icon: string
	temp_low: number
	temp_high: number
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	handleSearch: () => void
}