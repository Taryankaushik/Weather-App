
// const apiKey = "09cc59cc878c463b8b8175724240907"
const apiKey = "7c83f7f624093190b53ca54e12566c63"
const searchBtn = document.querySelector("#searchBtn")

const successCallback = (position) => {
    console.log(position)
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            weatherUpdate(data)
        })
}


const errorCallback = (error) => {
    console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


function callApi(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            if (data) {
                weatherUpdate(data)
            }
        })
        .catch((error) => {
            console.error(error)
        })

}



function weatherUpdate(data) {
    document.querySelector("#location").textContent = data.name;
    document.querySelector("#loc").textContent = data.name;
    document.querySelector("#weather_type").textContent = data.weather[0].main;
    document.querySelector("#temp").textContent = `${Math.round(data.main.temp)}°c`;
    document.querySelector("#Temperature").textContent = `${Math.round(data.main.temp)}°c (${data.weather[0].main})`;
    document.querySelector("#humidity").textContent = `${data.main.humidity}%`;
    document.querySelector("#Visibility").textContent = `${data.visibility / 1000}km`;
    document.querySelector("#Wind").textContent = `${data.wind.speed} km/h`;
    // document.querySelector(".country").textContent = data.sys.country;
    document.querySelector("#country").textContent = data.sys.country;

    if (data.weather[0].main == "Clouds") {
        document.querySelector("#icon").src = " https://openweathermap.org/img/wn/04n@2x.png"
        document.querySelector("#changeBackImage").classList.add("bg-cloud")
    }
    if (data.weather[0].main == "Clear") {
        document.querySelector("#icon").src = "images/clear.png"
        document.querySelector("#changeBackImage").classList.add("bg-clear")
    }
    if (data.weather[0].main == "Drizzle") {
        document.querySelector("#icon").src = "images/drizzel.png"
        // document.querySelector("#changeBackImage").classList.add("bg-drizzle")
    }
    if (data.weather[0].main == "Snow") {
        document.querySelector("#icon").src = "images/snow.png"
        document.querySelector("#changeBackImage").classList.add("bg-snow")
    }
    if (data.weather[0].main == "Mist") {
        document.querySelector("#icon").src = "images/mist.png"
        document.querySelector("#changeBackImage").classList.add("bg-mist")
    }
    if (data.weather[0].main == "Rain") {
        document.querySelector("#icon").src = "images/rain.png"
        document.querySelector("#changeBackImage").classList.add("bg-rainy")
    }
    if (data.weather[0].main == "Haze") {
        document.querySelector("#icon").src = "images/haze.png"
        document.querySelector("#changeBackImage").classList.add("bg-haze")
    }

    const date = new Date()
    document.querySelector("#date").textContent = date.toDateString()
    document.querySelector("#time").textContent = date.toLocaleTimeString()
}

searchBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("hello");
    let city = document.querySelector("#city").value
    if (city !== "") {
        callApi(city)
        document.querySelector("#city").value = "";
        document.querySelector("#changeBackImage").classList.remove("bg-cloud")
        document.querySelector("#changeBackImage").classList.remove("bg-clear")
        // document.querySelector("#changeBackImage").classList.remove("bg-drizzle")
        document.querySelector("#changeBackImage").classList.remove("bg-snow")
        document.querySelector("#changeBackImage").classList.remove("bg-mist")
        document.querySelector("#changeBackImage").classList.remove("bg-rainy")
        document.querySelector("#changeBackImage").classList.remove("bg-haze")
    }
})