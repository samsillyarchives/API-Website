const apiKey = "2bc93f85cd44f63f57a3cc000669e86d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    
    weatherIcon = document.querySelector(".weather-icon");
    if(response.status == 404 || response.status == 400){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.name.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }  else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", ()=>{
    searchBox = document.querySelector(".search input");
    checkWeather(searchBox.value);
})

checkWeather();