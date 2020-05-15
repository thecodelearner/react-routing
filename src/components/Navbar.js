import React from 'react'

const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<a href="/" className="brand-logo">HITMAN APP</a>

				<ul className="right">
					<li><a href="/">Home</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
