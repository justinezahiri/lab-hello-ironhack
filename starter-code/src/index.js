import React from "react"; // ~ const React = require('react')
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <App />, //premier paramètre de la fonction render
  document.getElementById("root") //deuxième paramètre de la fonction render
);