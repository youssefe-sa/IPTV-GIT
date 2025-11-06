import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Activer les futurs drapeaux pour React Router
// @ts-ignore - Les types ne sont pas encore à jour pour ces drapeaux
window.__reactRouterFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
