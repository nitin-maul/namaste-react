import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 className="heading-1">
        Namaste React using JSX
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
