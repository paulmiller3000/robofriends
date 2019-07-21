import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ border: '1px solid black', overflowY: 'scroll', width: '100vw', height: '100vh' }}>
			{props.children}
		</div>
	);
};

export default Scroll;