import React from "react";
import ReactDOM from "react-dom";

import SuccessModal from "./SuccessModal";

const renderApp = function() {
  ReactDOM.render(<SuccessModal />, document.querySelector("#app"));
};

if (module.hot) {
  module.hot.accept(["./SuccessModal"], function() {
    renderApp();
  });
}

renderApp();
