const urlBase = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = "7c1c61be6f2a6af5e321b46c712d42b4";

const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;

    if (city) {
        //Lllamar a API
        fetchWeather(city);


    } else {
        alert('Ingrese una ciudad valida')
    }
})


function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const responseData = document.getElementById('response');
    responseData.innerHTML = ''

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;


    const cityInfo = document.createElement('h2');
    const tempInfo = document.createElement('p');
    const humidityInfo = document.createElement('p');
    const descriptionInfo = document.createElement('p');
    const iconInfo = document.createElement('img');

    cityInfo.textContent = `${cityName}, ${countryName}`;
    tempInfo.textContent = `La temperatura es ${Math.floor(temp - diffKelvin)}°C`;
    humidityInfo.textContent = `La humedad es ${humidity}%`;
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`;
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    responseData.appendChild(cityInfo)
    responseData.appendChild(tempInfo)
    responseData.appendChild(humidityInfo)
    responseData.appendChild(iconInfo)
    responseData.appendChild(descriptionInfo)

}




