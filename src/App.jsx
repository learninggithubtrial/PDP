import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "Home/Header";
import Footer from "Home/Footer";
import sharedStore from "Home/sharedStore";
import SafeComponent from "./SafeComponent";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import CheckButton from "./CheckButton";
import LogoutListener from "./LogoutListener";

const App = () => {
  return (
    <div className="container">
      <SafeComponent>
        <Header app={{ name: "Anas" }} />
      </SafeComponent>
      <div className="">PDP</div>
      <CheckButton />
      <Footer />
    </div>
  );
};
ReactDOM.render(
  <Provider store={sharedStore}>
    <App />
    <LogoutListener />
  </Provider>,
  document.getElementById("app")
);
