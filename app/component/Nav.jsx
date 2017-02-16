var React = require('react');
var {Link, IndexLink} = require('react-router');

let Nav = (props) => {
	return (
		<div>
			<h3>Nav Component</h3>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Weather</IndexLink>
			<Link to="/About" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
			<Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
		</div>
	);
}

module.exports = Nav;