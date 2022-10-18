import React from "react";

//create your first component
const Navbar = () => {
	return (
		<div classNameName="bg-dark">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
			<a className="navbar-brand" href="#">Start bootstrap</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ms-auto">
				<li className="nav-item active ">
					<a className="nav-link active" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Services</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Contact</a>
				</li>
				</ul>
			</div>
			</nav>
		</div>
	);
};

export default Navbar;
