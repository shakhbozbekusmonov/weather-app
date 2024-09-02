import React from 'react'
import { StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

const Loader = () => {
	return (
		<AnimatedLoader
			visible={true}
			overlayColor='#FDF6AA'
			source={require('../assets/loader.json')}
			animationStyle={styles.lottie}
			speed={1}
		></AnimatedLoader>
	)
}

export default Loader

const styles = StyleSheet.create({
	lottie: {
		width: 300,
		height: 300,
	},
})
