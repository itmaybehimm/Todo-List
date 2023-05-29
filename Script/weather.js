const weatherDivElement = document.querySelector('#weather-icon-div')
const temperatureElement = document.querySelector('#temperature-div')

function getWeather(){
  navigator.geolocation.getCurrentPosition(handlePos);
  function handlePos(pos){
    let lat=pos.coords.latitude
    let lon=pos.coords.longitude
    let apiKey=`5df9298b3df5d84a67bada6ec5d60707`

    let weatherUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

    fetch(weatherUrl).then((res)=>res.json()).then(handleRes)

    function handleRes(res){
      weatherDivElement.innerHTML = `<img src=Images/${res.weather[0].main}.png>`
      temperatureElement.innerHTML=`<p class='temp-value'>${Math.round((res.main.temp-32)*5/9)+"°C"}<p>`
    }
  }
}

getWeather();
