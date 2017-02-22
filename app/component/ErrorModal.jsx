var React = require('react');

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
		let modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		let {message, title} = this.props;

		return (
			<div id='error-modal' className='reveal tiny text-center' data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className='button hollow' data-close="">OK!</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;