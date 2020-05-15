import React from 'react'

const Contact = (props) => {

	/* 
	* programmatic redirect example
	* history.push redirects to '/about' after timeout
	setTimeout(() => {
		props.history.push('/about');
	}, 2000);
	*/

	return (
		<div className="container">
			<h4 className="center">Contact page</h4>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aut omnis possimus dolorem iusto ab molestias natus dolores necessitatibus ratione. Ducimus exercitationem nemo iusto odio, provident maxime cum rerum quo.</p>
		</div>
	)
}

export default Contact
