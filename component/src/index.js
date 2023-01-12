import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const mountShareableComponent = () => {
  const element = document.getElementById("shareable-component");
  const root = ReactDOM.createRoot(element);

  const props = {
    surface: element.dataset.surface,
  };

  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>
  );
};

window.mountShareableComponent = mountShareableComponent;
