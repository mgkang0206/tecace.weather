module.exports.function = function getWeather (city) {

  //Url for Weather Api Call.
  const url = "https://api.openweathermap.org";
  const weatherQuery ="/data/2.5/weather?units=imperial&APPID=";
  
  //Url for Unsplash Api Call for Card Image.
  const picUrl = "https://api.unsplash.com";
  const picQuery ="/search/photos?client_id="
  
  //Sets the format of the Api callback
  var options = {
    format: 'json',
  };
  
  //Making an Api Call to the Weather Api
  var res = http.getUrl(url + weatherQuery + "*YOUR API KEY HERE*" + "&q=" + city,options);
  var forecasts = res.weather[0].description;
  
  //Making an Api Call to the Image Api
  var randomNum = Math.floor((Math.random()*4));
  var pic = http.getUrl(picUrl + picQuery + "*YOUR API KEY HERE*" + "&query=" +city+ "%20landmark&page=1",options);
  var picSrc = pic.results[randomNum].urls.small;
  

  //Returning the necessary properties of the Weather.model(The Goal)
  return  { city: city.charAt(0).toUpperCase()+city.slice(1), 
            forecast: forecasts, 
            temperature: res.main.temp, 
            picture: picSrc
          } 
} 