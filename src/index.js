import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./redux/store/store";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "alertifyjs/build/css/alertify.min.css";
import "video-react/dist/video-react.css";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
