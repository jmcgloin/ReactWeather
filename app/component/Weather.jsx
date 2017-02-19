var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

let Weather = React.createClass(
{
	getInitialState: function () {
		return ({
			isLoading: false
		});
	},
	handleUpdate: function (location) {
		let that = this;

		this.setState({isLoading: true});
		//e4ac05962320215331a10b665b88133c API key
		OpenWeatherMap.getTemp(location).then(function(obj) {
			that.setState(obj);
			that.setState({isLoading: false});
		}, function(errorMessage) {
			alert(errorMessage);
			that.setState({isLoading: false});
		});
	},
	render: function () {
		let {isLoading, temp, location} = this.state;
		let renderMessage = function() {
			if(isLoading) {
				return <h3 className='text-center'>Getting the weather...</h3>;
			}else if(temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		};
		return (
			<div>
				<h1 className='text-center'>Get Weather</h1>
				<WeatherForm onUpdate={this.handleUpdate}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;

// module-eval-source-map
// inline-eval-source-map
// eval-source-map