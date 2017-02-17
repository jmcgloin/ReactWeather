var React = require('react');
var {Link} = require('react-router');

let Examples = (props) => {
	return (
		<div>
			<h1 className='text-center'>Examples!</h1>
			<p className='text-center'>Here are a few of my favorite locations to try:</p>
			<ol className='text-center'>
				<li>
					<Link to='/?location=akron'>Akron, OH</Link>
				</li>
				<li>
					<Link to='/?location=qaanaaq'>Qaanaaq, Greenland</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;