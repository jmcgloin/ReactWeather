var React = require('react');
var {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();

		const location = this.refs.loc.value;
		const encodedLocation = encodeURI(location);
		
		if(location.length > 0) {
			this.refs.loc.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function() {
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Weather</IndexLink>
						</li>
						<li>
							<Link to="/About" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
						</li>
						<li>
							<Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<form onSubmit={this.onSearch}>
						<ul className='menu'>
							<li><input type='search' ref='loc' placeholder='Search weather by city'/></li>
							<li><input type='submit' className='button' value='getWeather'/></li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;