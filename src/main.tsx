import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#fffefb",
      "bg-200": "#f5f4f1",
      "bg-300": "#cccbc8",
      primary: "#d4eaf7",
      "primary-200": "#b6ccd8",
      "primary-300": "#3b3c3d",
      accent: "#71c4ef",
      "accent-200": "#00668c",
      text: "#1d1c1c",
      "text-200": "#313d44",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
