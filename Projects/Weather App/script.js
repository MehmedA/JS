let key = "abb5156b71067dccc2d216becd63e3c0"

let cityapi = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let city = document.querySelector(".city")
let temp = document.querySelector(".temp")
let description = document.querySelector(".description")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")
let button = document.querySelector(".button")

const setQuerry = (e) => {
    if (e.keyCode == "13") {
      getResult(searchBar.value);
    }
  };

  const getResult = (cityName) => {
    let querry = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(querry)
      .then((weather) => {
        return weather.json();
        console.log(weather);
      })
  };

const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keydown", setQuerry);