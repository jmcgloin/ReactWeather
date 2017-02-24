var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app.css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='/About'component={About}/>
			<Route path='/Examples'component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);