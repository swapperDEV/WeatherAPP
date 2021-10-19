let lat, lat2, lon, lon2 = ""
let cityID = ""

const getLocation = () => {
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      $('#country').html(location.country_name);
      $('#state').html(location.state);
      $('#city').html(location.city);
      cityID = location.city
      lat = '&lat=' + location.latitude
      lon = '&lon=' + location.longitude
    }
  })}
getLocation()
const locationGet = document.querySelector('.getLoc')
locationGet.addEventListener('click', () => {
  console.log('getting your location');
  getLocation()
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
})