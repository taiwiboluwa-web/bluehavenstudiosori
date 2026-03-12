
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { SeasonalThemeProvider } from "./contexts/SeasonalThemeContext";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <SeasonalThemeProvider>
      <App />
    </SeasonalThemeProvider>
  );
  