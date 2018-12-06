import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "./components/store";
import "./index.css";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
/*
  This code sets up Redux devtools and connected-react-router
  . 
  I have provided it so you do not have to go through the all the setup yourself.
  However, it would be instructive to go through the setup on your own if you have time. 
  If you would like to go through setup on your own you can see the instructions at the two links below:
    https://github.com/zalmoxisus/redux-devtools-extension
    https://github.com/supasate/connected-react-router
  
  
  Quick Setup Instructions
  DONE 1.) replace your src/index.js with the below code
  DONE 2.) npm install --save connected-react-router
  3.) make sure you have a file ./reducers/index.js because it is being imported like that on line 22
  4.) depending on how your project is strutured, there may be other imports that you have to fix the file path for
*/

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import todoApp from "./reducers";
// import registerServiceWorker from "./registerServiceWorker";
// import "todomvc-app-css/index.css";
// import { createBrowserHistory } from "history";
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import { ConnectedRouter } from "connected-react-router";

// const history = createBrowserHistory();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   connectRouter(history)(todoApp),
//   composeEnhancers(
//     applyMiddleware(
//       routerMiddleware(history) // for dispatching history actions
//     )
//   )
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById("root")
// );

// registerServiceWorker();
