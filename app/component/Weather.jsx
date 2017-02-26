var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

let Weather = React.createClass(
{
	getInitialState: function () {
		return ({
			isLoading: false
		});
	},
	handleUpdate: function (location) {
		let that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});
		//e4ac05962320215331a10b665b88133c API key
		OpenWeatherMap.getTemp(location).then(function(obj) {
			that.setState(obj);
			that.setState({isLoading: false});
		}, function(e) {
			//alert(errorMessage);
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	componentDidMount: function() {
		let location = this.props.location.query.location;
		if(location && location.length > 0) {
			this.handleUpdate(location);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps(nextProps) {
		let location = nextProps.location.query.location;
		if(location && location.length > 0) {
			this.handleUpdate(location);
			window.location.hash = '#/';
		}
	},
	render: function () {
		let {isLoading, temp, location, errorMessage} = this.state;
		let renderMessage = function() {
			if(isLoading) {
				return <h3 className='text-center'>Getting the weather...</h3>;
			}else if(temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		};
		let renderError = function() {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		};
		return (
			<div>
				<h1 className='text-center page-title'>Get Weather</h1>
				<WeatherForm onUpdate={this.handleUpdate}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;