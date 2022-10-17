import React from "react";

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