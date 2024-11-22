import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx"; 
import { SearchProvider } from "./context/SearchContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SearchProvider>
			<App />
		</SearchProvider>
	</StrictMode>
);
