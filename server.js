const express = require('express');
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Weather API route using Geocoding API
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    // Step 1: Geocode the city to get coordinates
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
    const geoResponse = await axios.get(geoUrl);

    if (geoResponse.data.length === 0) {
      return res.status(404).json({ error: 'City not found' });
    }

    const { lat, lon, name, country } = geoResponse.data[0];
    console.log(`Coordinates for ${name}, ${country}: ${lat}, ${lon}`);

    // Step 2: Fetch weather data using the coordinates
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const weatherResponse = await axios.get(weatherUrl);

    if (weatherResponse.status === 200) {
      res.json(weatherResponse.data);
    } else {
      res.status(weatherResponse.status).json({ error: weatherResponse.data.message });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
