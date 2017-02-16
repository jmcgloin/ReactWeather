var React = require('react');

let WeatherForm = React.createClass(
{
	onFormSubmit: function(e) {
		e.preventDefault();

		let location = this.refs.loc.value;

		if(location.length > 0){
			this.refs.loc.value = "";
			this.props.onUpdate(location);
		}
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="loc" placeholder="Enter location"/>
				<button>Get Weather</button>
			</form>
		);
	}
});

module.exports = WeatherForm;