let now;
let days
const dayUpdate = () => {
    now = new Date();
    if(now.getDay() == 6) {
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    } else if(now.getDay() == 5) {
        days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu","Fri"];
    } else if(now.getDay() == 4) {
        days = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed","Thu"];
    } else if(now.getDay() == 3) {
        days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue","Wed"];
    } else if(now.getDay() == 2) {
        days = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon","Tue"];
    } else if(now.getDay() == 1) {
        days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun","Mon"];
    } else if(now.getDay() == 0) {
        days = ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } 
}

const reseting = () => {
    let allIn = document.querySelectorAll('.dayDiv')
    allIn = Array.prototype.slice.call(allIn);
    allIn.forEach((e) => {
        e.style.display = 'none'
    })
}

const sevenDay = () => {
    reseting()
    URL = API_LINK2 + 'lat=' + lat2 + '&lon=' + lon2 + API_UNITS + '&exclude=hourly,minutely' + API_KEY
    axios.get(URL).then(res => {
        console.log(res.data)
        dayUpdate()
        for(let i=1; i<8; i++) {
            let thisdata = res.data.daily[i]
            const div = document.createElement('div')
            div.classList.add('dayDiv')
            const whichDay = document.createElement('a')
            whichDay.textContent = days[i-1]
            div.appendChild(whichDay)
            whichDay.classList.add('lightgray')
            const imgWeather = document.createElement('img')
            imgWeather.classList.add('imgWeatherSeven')
            let id = thisdata.weather[0].id
            if(id >= 200 && id < 300) {
                imgWeather.setAttribute('src', './icons/weather/thunder.png')
            } else if(id >= 300 && id < 400) {
                imgWeather.setAttribute('src', './icons/weather/smallrain.png')
            } else if(id >= 500 && id < 600) {
                imgWeather.setAttribute('src', './icons/weather/rain.png')
            } else if(id >= 600 && id < 700) {
                imgWeather.setAttribute('src', './icons/weather/snow.png')
            } else if(id >= 700 && id < 800) {
                imgWeather.setAttribute('src', './icons/weather/fog.png')
            } else if(id === 800) {
                imgWeather.setAttribute('src', './icons/weather/clear.png')
            } else if(id > 800 && id < 900) {
                imgWeather.setAttribute('src', './icons/weather/cloud.png')
            } else {
                imgWeather.setAttribute('src', './icons/weather/unknown.png')
            }
            div.appendChild(imgWeather)
            const dayTemp = document.createElement('a')
            dayTemp.classList.add('darkgray')
            dayTemp.innerHTML = Math.round(thisdata.temp.day) + '<sup>°C</sup>'
            div.appendChild(dayTemp)
            document.querySelector('.sdaydata').appendChild(div)
        }
    })
}

