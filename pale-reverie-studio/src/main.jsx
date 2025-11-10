import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import "./index.css";
import "./App.css";
import App from "./Home";
import Portfolio from "./Portfolio";
import Studio from "./Studio";
import Contacts from "./Contacts";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<div className="site-container">
				<div>
					<Header />
				</div>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/studio" element={<Studio />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<div className="footer">
					<p>© Pale Reverie Studio, 2025</p>
				</div>
			</div>
		</BrowserRouter>
	</StrictMode>
);
