const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_LINK2 = 'https://api.openweathermap.org/data/2.5/onecall?'
const API_KEY = '&appid=1b52a4b46e4aa239e0e9363a3dd9080e'
const API_UNITS = '&units=metric'

const mapcreate = () => {
    console.log('map creating');
    document.querySelector('.map').remove()
    let newmap = document.createElement('div')
    newmap.classList.add('map')
    newmap.setAttribute('id', 'map')
    document.body.appendChild(newmap)
    var map = new ol.Map({
        target: 'map',
        layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
        ],
        view: new ol.View({
        center: ol.proj.fromLonLat([lon2, lat2]),
        zoom: 9
        })
    });
}

setTimeout(() => {
    const city = 'London'
    let URL

    if(lat != "") {
        URL = API_LINK + lat + lon + API_KEY + API_UNITS + '&exclude=daily'
    } else {
        URL = API_LINK + city + API_KEY + API_UNITS + '&exclude=daily'
        document.querySelector('#city').textContent = city + " , England"
    }

    axios.get(URL).then(res => {
        console.log(res.data)
        lat2 = res.data.coord.lat
        lon2 = res.data.coord.lon
        console.log('check', lat2, "," ,lon2);
        infoInput(res.data)
    })

    setTimeout(() => {
        mapcreate()
    }, 1000)
},1000)
