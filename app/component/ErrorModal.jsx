var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

let ErrorModal = React.createClass(
{
	getDefaultProps() {
		return ({
			title: 'Error!'
		})
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		let {message, title} = this.props;

		let modalMarkup = (
			<div id='error-modal' className='reveal tiny text-center' data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className='button hollow' data-close="">OK!</button>
				</p>
			</div>
		);

		let $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		let modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		return (
			<div></div>
		);
	}
});

module.exports = ErrorModal;