# Weather API Application

## Overview

This project is a **Weather API Application** that provides real-time weather data for any city using the OpenWeatherMap API. Users can input a city name and retrieve weather information, including temperature, humidity, wind speed, and general conditions.

The project consists of two parts:
1. **Local Implementation**: Development and testing of the application locally.
2. **Deployment**: Hosting the application on two servers with a load balancer for high availability and scalability.

## Features

- Fetches weather data using the OpenWeatherMap API.
- Geocodes city names to obtain latitude and longitude for precise weather results.
- Displays weather information in a user-friendly format.
- Handles user input errors and API response issues gracefully.

## Technologies Used

- Node.js
- Express.js
- Axios
- HTML/CSS/JavaScript
- NGINX
- UFW
- GitHub

## Installation

### Prerequisites
- Node.js (v16+)
- npm
- Git

### Steps
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file and add your OpenWeatherMap API key.
5. Start the server using `node server.js`.

## Usage
1. Visit the app locally by opening `http://localhost:3000` in a browser.
2. Enter a city name and click "Get Weather" to fetch the data.

## Deployment

### Server Details
- **Web Server 1**: 3.95.37.7
- **Web Server 2**: 3.93.68.73
- **Load Balancer**: 18.205.19.44

### Deployment Steps
1. Clone the repository on both servers.
2. Install dependencies.
3. Start the application.
4. Configure NGINX to distribute traffic between the servers.
5. Restart NGINX for changes to take effect.

## Load Balancer Access
Access the app through the load balancer via:  
`http://allanhirwa.tech`

## Error Handling
- **404 Errors**: Custom error page for missing resources.
- **API Errors**: Handles missing city names and API request failures.

## Security
- API keys are stored in a `.env` file to prevent exposure.
- Sensitive data is excluded from the repository using a `.gitignore` file.

## Challenges & Solutions
- Address conflicts resolved by changing the server port.
- Configured load balancer to ensure even traffic distribution.

## Future Enhancements
- User authentication for personalized data.
- Search history feature.
- Additional weather insights like forecasts.

## Credits
- OpenWeatherMap API
- Axios library
