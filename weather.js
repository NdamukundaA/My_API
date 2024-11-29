async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherDataDiv = document.getElementById('weatherData');

  if (!city) {
    weatherDataDiv.innerHTML = '<p class="error">Please enter a city name.</p>';
    return;
  }

  try {
    const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (response.cod === 200) {
      const weather = data.weather[0];
      const main = data.main;
      const wind = data.wind;

      weatherDataDiv.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p><strong>Condition:</strong> ${weather.main} - ${weather.description}</p>
        <p><strong>Temperature:</strong> ${main.temp}°C (Feels like: ${main.feels_like}°C)</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
      `;
    } else {
      weatherDataDiv.innerHTML = `<p class="error">${data.error || 'City not found. Please try again.'}</p>`;
    }
  } catch (error) {
    weatherDataDiv.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
    console.error('Fetch Error:', error);
  }
}
