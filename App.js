const h1 = React.createElement("h1", {}, "Namaste everyone");

const h2 = React.createElement("h2", {}, "Namaste everyone");

const container = React.createElement("div", { id: "container" }, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
