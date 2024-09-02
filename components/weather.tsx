import { WeatherProps } from '@/types'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

const Weather = ({
	name,
	temp,
	condition,
	icon,
	temp_low,
	temp_high,
	search,
	setSearch,
	handleSearch,
}: WeatherProps) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/bg.png')}
				resizeMode='cover'
				style={styles.image}
			>
				<Image
					style={styles.icon}
					source={{
						uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
					}}
				/>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.temp}>{temp} °C</Text>
				<Text style={styles.text}>{condition}</Text>
				<Text style={styles.high_low}>
					H:{temp_high}° L:{temp_low}°
				</Text>

				<View style={styles.searchContainer}>
					<TextInput
						style={styles.searchInput}
						placeholder='Search location'
						placeholderTextColor='#999'
						value={search}
						onChangeText={text => setSearch(text)}
					/>
					<TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
						<Text style={styles.searchButtonText}>Search</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>

			<StatusBar style='auto' />
		</View>
	)
}

export default Weather

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F3F4F6',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchContainer: {
		position: 'absolute',
		bottom: 230,
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		borderRadius: 10,
		padding: 10,
	},
	searchInput: {
		flex: 1,
		fontSize: 16,
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		color: '#000',
	},
	searchButton: {
		marginLeft: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#1E40AF',
		borderRadius: 5,
	},
	searchButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 28,
		color: '#fff',
		marginBottom: 5,
		fontWeight: '600',
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},
	temp: {
		fontSize: 60,
		fontWeight: '200',
		color: '#fff',
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},
	text: {
		fontSize: 22,
		fontWeight: '600',
		color: '#E5E7EB',
		textTransform: 'capitalize',
		marginBottom: 5,
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},
	high_low: {
		fontSize: 22,
		fontWeight: '600',
		color: '#fff',
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},
	icon: {
		width: 120,
		height: 120,
		marginBottom: 20,
	},
})
