import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Card = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
        <div className="container m-0 p-0">

        <div className="card text-center">
        <img className="card-img-top" src={props.imageUrl} alt="Card image cap"></img>
        <div className="card-body py-4">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>

        </div>
        <div className="card-footer p-2">
            <a href="#" className="btn btn-primary p-2">Find Out More!</a>
            </div>
        </div>

        

    </div>



	);
};
Card.propTypes = {
    //add pproperties
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};


export default Card;

/* import React from "react";

const Card = () => {
  return (
    <div className="container p-0 my-4">

        <div className="row p-0 m-0">

        <div className="card col-3 text-center">
        <img className="card-img-top" src="https://via.placeholder.com/500x325.png" alt="Card image cap"></img>
        <div className="card-body py-4">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
        <div className="card-footer p-2">
            <a href="#" className="btn btn-primary p-2">Find Out More!</a>
            </div>
        </div>

        <div className="card col-3 text-center">
        <img className="card-img-top" src="https://via.placeholder.com/500x325.png" alt="Card image cap"></img>
        <div className="card-body py-4">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
        <div className="card-footer p-2">
            <a href="#" className="btn btn-primary p-2">Find Out More!</a>
            </div>
        </div>

        </div>

    </div>
  );
}

export default Card; 




<div className="card m-5">
<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
<div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.buttonUrl} className="btn btn-primary">
        {props.buttonLabel}
    </a>
</div>
</div> */