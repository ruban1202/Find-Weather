const apiKey = "e5b2d4e3599e80d22aee42016569eb8c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const box = document.querySelector(".searchBox");
const btn = document.querySelector(".search button");

const weatherImg =document.querySelector(".weatherImg");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status == 404) {
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display="none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherImg.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Dizzle") {
        weatherImg.src = "images/dizzle.png";
    }
    else if(data.weather[0].main == "Haza") {
        weatherImg.src = "images/haze.png";
    }
    else if(data.weather[0].main == "mist") {
        weatherImg.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherImg.src = "images/sunny.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherImg.src = "images/rainy.png";
    }
        document.querySelector(".invalid").style.display = "none";
        document.querySelector(".weather").style.display="block";
    }
}

btn.addEventListener("click", ()=> {
    checkWeather(box.value);
})



