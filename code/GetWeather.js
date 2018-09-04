module.exports.function = function getWeather (city) {

  var url = "https://api.openweathermap.org"
  var picUrl = "https://api.unsplash.com"
  var options = {
    format: 'json',
  }
  
  var res = http.getUrl(url + "/data/2.5/weather?units=imperial&APPID=8267725a41bb55c1299b9d5128e04afd&q="+city,options)
  var forecasts = res.weather[0].description
  
  
  var randomNum = Math.floor((Math.random()*4))
  var pic = http.getUrl(picUrl + "/search/photos?client_id=c7f97f426a9e86beea12b9f5ff796ae7b0d02074fc0fc0df45919e0cb57f9e28&query="+city+"%20landmark&page=1",options)
  var picSrc = pic.results[randomNum].urls.small
  

  
  return  { city: city.charAt(0).toUpperCase()+city.slice(1), 
            forecast: forecasts, 
            temperature: res.main.temp, 
            picture: picSrc
          } 
} 