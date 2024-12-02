document.getElementById('get-weather').addEventListener('click', fetchWeather);
document.getElementById('city-input').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});

function fetchWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    
    if (data.cod !== 200) {
        weatherResult.innerHTML = `<p>Error: ${data.message}</p>`;
    } else {
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    }

    weatherResult.classList.remove('hidden');
}
