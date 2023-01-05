const h1 = React.createElement("h1", {}, "Namaste everyone");

const h2 = React.createElement("h2", {}, "Namaste everyone");

const h3 = React.createElement("h3", {}, "Hello h3 heading");

const container = React.createElement("div", { id: "container" }, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
