import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PageContextProvider } from "./context/PageContext.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageContextProvider>
      <ThemeProvider>
        <App />
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          theme='dark'
        />
      </ThemeProvider>
    </PageContextProvider>
  </StrictMode>
);
