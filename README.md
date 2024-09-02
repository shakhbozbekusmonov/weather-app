# React Native Weather App

This is a React Native application that displays the current weather information based on the user's location or a searched location. The app uses Expo for development and leverages the OpenWeatherMap API to fetch weather data.

## Features

- **Fetch Weather by Location**: Automatically fetches and displays weather data based on the user's current location.
- **Search for Weather**: Allows users to search for weather information by entering a location.
- **Custom Weather Icons**: Displays weather conditions using custom icons from OpenWeatherMap.
- **Responsive Design**: The app is styled to be responsive and visually appealing on various screen sizes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install the dependencies:**

   ```bash
   bun install
   ```

3. **Create an `.env` file in the root directory and add your OpenWeatherMap API key:**

   ```env
   EXPO_PUBLIC_API_URL=your_api_url_here
   EXPO_PRIVATE_API_KEY=your_api_key_here
   ```

4. **Start the development server:**

   ```bash
   bun run start
   ```

## Usage

- **Getting Weather by Location:**

  - On app launch, the app requests permission to access the device's location.
  - If permission is granted, it fetches the current weather data for the user's location and displays it.

- **Searching for Weather:**
  - Enter a city name in the search bar and click "Search" to fetch weather data for the entered location.
  - If the location is not found, an alert will notify the user to try again.

## Components

- **Welcome**: The main component that manages the state and logic for fetching and displaying weather data.
- **Weather**: A presentational component that displays the weather data, including temperature, condition, and icons.

## Dependencies

- **React**: For building the UI components.
- **React Native**: For mobile app development.
- **Expo**: For easier development and deployment of the React Native app.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **Expo Location**: For accessing the user's location.

## Customization

- **Styling**: The app uses custom styles defined in the `Weather` component's `styles` object. You can modify these styles to change the appearance of the app.
- **API Integration**: The app uses the OpenWeatherMap API. You can replace it with another weather API if needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author**: Shakhbozbek Usmonov  
**Email**: [shakhbozbek.usmonov@gmail.com](mailto:shakhbozbek.usmonov@gmail.com)  
**LinkedIn**: [linkedin.com/in/shakhbozbekusmonov](https://www.linkedin.com/in/shakhbozbekusmonov/)  
**GitHub**: [github.com/shakhbozbekusmonov](https://github.com/shakhbozbekusmonov)
