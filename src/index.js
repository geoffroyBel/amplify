import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import store from "./store";
import withRoot from "./withRoot";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import configureAmplify from "./configureAmplify";

configureAmplify(store);
const Home = withRoot(() => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
));

ReactDom.render(<Home />, document.getElementById("root"));
