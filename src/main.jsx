import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "../src/context/SearchContext.jsx"
import "./index.css";
import App from "./App.jsx";
import * as React from "react";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SearchProvider>
			<App />
		</SearchProvider>
	</StrictMode>
);
