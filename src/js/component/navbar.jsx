import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<div className="bg-dark">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
			<a class="navbar-brand" href="#">Start bootstrap</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav ms-auto">
				<li class="nav-item active">
					<a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item ms-auto">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item ms-auto">
					<a class="nav-link" href="#">Services</a>
				</li>
				<li class="nav-item ms-auto">
					<a class="nav-link" href="#">Contact</a>
				</li>
				</ul>
			</div>
			</nav>
		</div>
	);
};

export default Navbar;
