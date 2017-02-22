let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e4ac05962320215331a10b665b88133c&units=imperial';
// ?q={cityname}

module.exports = {
	getTemp: function(location) {

		let encodedLocation = encodeURIComponent(location);
		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		//console.log(requestUrl);

		return axios.get(requestUrl).then(function(res) {
			//debugger;
			if(res.data.message && res.data.cod) {
				throw new Error(res.message);
			} else {
				return {temp: Math.round(res.data.main.temp), location:res.data.name};
			}
		}, function (err) {
			throw new Error('Unable to get weather for that location.');
		});
	}
};