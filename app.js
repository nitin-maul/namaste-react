import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello world from React!!!!");
console.log('heading', heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
