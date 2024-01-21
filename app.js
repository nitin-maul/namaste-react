const heading = React.createElement("h1", {}, "Hello world from React!!!!");

const nextedHeading = React.createElement("div", { id: parent }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "child1" }, "This is heading 1 inside child1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "child1" }, "This is heading 2 inside child2")
  ),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);

console.log("Heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);
root.render(nextedHeading);
