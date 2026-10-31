import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installContactClickTracking } from "./lib/lead-events";
installContactClickTracking();
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
