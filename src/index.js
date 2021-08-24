import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";//ek object hai jo react redux library se milta hai
import {counterReducer , loginReducer } from "./redux/reducer";

let rootReducer = combineReducers({
  counter : counterReducer,
  logged : loginReducer,
})

let myStore = createStore(rootReducer);

ReactDOM.render(
  
  <Provider store={myStore}>   {/* hamrae store ko accesible kar deta hai uske children ko // sabkoi acess kar paae state ko */}
    <App />
  </Provider>,

  document.getElementById("root")
);