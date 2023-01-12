import "./App.css";
import { useEffect } from "react";
import useScript from "./use-script";

function App() {
  const status = useScript(
    "https://55xey4-3000.preview.csb.app/static/js/bundle.js"
  );

  useEffect(() => {
    if (status === "ready") window.mountShareableComponent();
  }, [status]);

  return (
    <div className="App">
      <h1>MFE DEMO</h1>

      <div id="shareable-component" data-source="ph" />
    </div>
  );
}

export default App;
