import React from 'react'
import { NavLink, withRouter } from "react-router-dom";
// import Hitman from '../assets/hitman2-logo.png'
const Navbar = (props) => {

	// * programmatic redirect
	// setTimeout(() => {
	// 	props.history.push('/about')
	// }, 2000);

	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">

				{/* <img className="brand-logo" src={Hitman} alt="hitman logo"></img> */}


				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Navbar)
