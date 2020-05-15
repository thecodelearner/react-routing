import React, { Component } from 'react'

class Post extends Component {

	state = {
		id: null
	}


	componentDidMount() {
		// console.log(this.props);
		let id = this.props.match.params.post_id;
		this.setState({
			id: id,
		})

	}


	render() {
		return (
			<div className="container">
				<h4>route param </h4>
				<p>{this.state.id}</p>
			</div>
		)
	}
}

export default Post
