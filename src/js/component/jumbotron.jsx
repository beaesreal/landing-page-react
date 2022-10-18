import React from "react";

//create your first component
const Jumbotron = () => {
	return (
        <div className="container p-4 jumbotroncss ">
        <div className="jumbotron">
        <h1 className="display-4">
            A Warm Welcome!
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra nibh cras. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.</p>
        <p className="lead">
            <a className="btn btn-primary" href="#" role="button">Call to action!</a>
        </p>
        </div>
        </div>
	);
};

export default Jumbotron;