const inputCityName = document.querySelector('.getData')
const acceptCityName = document.querySelector('.postData')
let cityName = ""

const inputCity = () => {
    cityName = inputCityName.value
    URL = API_LINK + cityName + API_KEY + API_UNITS + '&exclude=daily'
    axios.get(URL).then(res => {
        console.log(res.data)
        lat2 = res.data.coord.lat
        lon2 = res.data.coord.lon
        console.log('check', lat2, "," ,lon2);
        infoInput(res.data)
        setTimeout(() => {
            mapcreate()
        }, 1000)
        inputCityName.value = ""
    })
}

acceptCityName.addEventListener('click', () => {
    inputCity()
})

inputCityName.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        inputCity()
    }
})
