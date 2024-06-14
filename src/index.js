import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App";
import store from "./store";

import "./styles/index.scss";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

/* ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
); */
