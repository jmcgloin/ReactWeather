var React = require('react');

let WeatherMessage = ({temp, location}) => {

	return (
		<div>
			<h3>The temperature in {location} is {temp} degrees.</h3>
		</div>
	);
}

module.exports = WeatherMessage;