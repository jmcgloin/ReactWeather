var React = require('react');

let ErrorModal = React.createClass(
{
	componentDidMount: function() {
		let modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		//let message = this.props.message;
		return (
			<div id='error-modal' className='reveal tiny text-center' data-reveal=''>
				<h4>Error</h4>
				<p>Some error message</p>
				<p>
					<button className='button hollow' data-close=''>OK!</button>
				</p>
			</div>
		)
	}
})

module.exports = ErrorModal;