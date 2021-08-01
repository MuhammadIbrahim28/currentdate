import React from "react";
import ReactDom from "react-dom";
const name = "Ibrahim";
const currentdate = new Date();
const year = currentdate.getFullYear();
ReactDom.render(
  <div>
    <p>Yourname {name} </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
