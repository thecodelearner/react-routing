import React from 'react'

const Rainbow = (WrappedComponent) => {
	const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
	const randomColor = colors[Math.floor(Math.random() * 5)];

	// get css class as color-text eg. red-text
	const colorClassName = randomColor + '-text';

	return (props) => {
		return (
			<div className={colorClassName} >
				<WrappedComponent {...props} />
			</div >
		)
	}
}

export default Rainbow