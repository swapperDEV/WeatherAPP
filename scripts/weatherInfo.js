const weatherDescription = document.querySelector('.mainweatherinfo')
const weatherTemp = document.querySelector('.temperature')
const cityName2 = document.querySelector('#city')
const pressure = document.querySelector('.pressure')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')
const visibility = document.querySelector('.visibility')
const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')

let statusID

const getPhoto = () => {
    const photo = document.querySelector('.weatherIMG2')
    let id = statusID.id
    if(id >= 200 && id < 300) {
        photo.setAttribute('src', '/icons/weather/thunder.png')
    } else if(id >= 300 && id < 400) {
        photo.setAttribute('src', '/icons/weather/smallrain.png')
    } else if(id >= 500 && id < 600) {
        photo.setAttribute('src', '/icons/weather/rain.png')
    } else if(id >= 600 && id < 700) {
        photo.setAttribute('src', '/icons/weather/snow.png')
    } else if(id >= 700 && id < 800) {
        photo.setAttribute('src', '/icons/weather/fog.png')
    } else if(id === 800) {
        photo.setAttribute('src', '/icons/weather/clear.png')
    } else if(id > 800 && id < 900) {
        photo.setAttribute('src', '/icons/weather/cloud.png')
    } else {
        photo.setAttribute('src', '/icons/weather/unknown.png')
    }
    
}

const unixdata = (x) => {
    let date = new Date(x * 1000)
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
    }

const infoInput = (data) => {
    weatherDescription.textContent = data.weather[0].description
    if(cityName != "") {
        document.querySelector('#country').textContent = ""
        document.querySelector('#state').textContent = ""
        cityName2.textContent = cityName + ", " + data.sys.country
    }
    statusID = Object.assign({}, ...data.weather)
    pressure.textContent = data.main.pressure
    humidity.textContent = data.main.humidity
    windspeed.textContent = data.wind.speed
    visibility.textContent = data.visibility / 1000 + "km"
    sunriseX = data.sys.sunrise
    sunsetX = data.sys.sunset
    sunrise.textContent = unixdata(sunriseX)
    sunset.textContent = unixdata(sunsetX)
    getPhoto()
    cityName = ""
    weatherTemp.textContent = Math.round(data.main.temp)
    sevenDay()
}
