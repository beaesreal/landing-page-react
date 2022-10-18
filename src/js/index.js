//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));

ReactDOM.render(
	<Card
		title="Bob Dylan"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Go to wikipedia"
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
	/>,
	document.querySelector("#card0")
);


ReactDOM.render(
	<Card
		title="Bob Dylan"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Go to wikipedia"
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
	/>,
	document.querySelector("#card1")
);

ReactDOM.render(
	<Card
		title="Bob Dylan"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Go to wikipedia"
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
	/>,
	document.querySelector("#card2")
);

ReactDOM.render(
	<Card
		title="Bob Dylan"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Go to wikipedia"
		buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
	/>,
	document.querySelector("#card3")
);