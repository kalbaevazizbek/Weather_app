// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api-key fbec0db00222a359eaaf6073239a1dbb
const apiKey = "fbec0db00222a359eaaf6073239a1dbb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const textalign = document.querySelector('.not');
const searchInput = document.querySelector('.menu input')
const searchButton = document.querySelector('.search button')
const weatherIcon = document.querySelector('.imagew')
const fonttext = document.querySelector('.inner')

async function checkWeather(value) {
    const response = await fetch(apiUrl + value + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status === 404) {
        document.querySelector(".container").style.height = '110px'
        document.querySelector('.imagew').src = "";
        document.querySelector('.img_center').innerHTML = "";
        document.querySelector('.water').style.display = "none";
        document.querySelector('.wind').style.display = "none";
        
    } else if (searchInput.value) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.proc1').innerHTML = data.main.humidity + "%";
        document.querySelector('.proc2').innerHTML = Math.round(data.wind.speed) + "km/h";


    if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'clear-sky.png'
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'haze.png'
    }
    }
   
}

 


searchButton.addEventListener("click", function() {
    if (searchInput.value === "") {
        return;
    }
    
   
    checkWeather(searchInput.value)
});

checkWeather(value);