import mainlogo from "./assets/IMG_1260.PNG";
import home1 from "./assets/P1014622_s.jpg";
import home2 from "./assets/P1014717_s.jpg";
import home3 from "./assets/P1014758_s.jpg";
import home4 from "./assets/P1014670.jpg";
import home5 from "./assets/P1014695.jpg";
import home6 from "./assets/P1014894.jpg";

import "./App.css";
import { useState } from "react";

function App() {
	return (
		<>
			<div>
				<div className="top-section">
					<img src={mainlogo} className="pale-logo"></img>
				</div>
				<div className="home-section">
					<h2>WHO WE ARE</h2>
					<p>
						We are a duo of music producers moved by passion for
						music production and sound design based in Italy. Our
						story together begins in 2015, when we met in a
						country-rock band named Wings Along Road, for which then
						we became co-writers and producers. The production phase
						of the band's EP "The Ocean Tales" gave us the idea of
						opening a studio together. Since then, we have produced,
						mixed and mastered a single from local artist MatuMatu,
						and are currently on our way to publish our first full
						length album. We love making music and we aren't afraid
						to break genre boundaries, so, if you're looking for
						writing, recording, production, or mixing, we have the
						ear and the drive to help your idea come to life.
					</p>
					<div className="home-studio-pics">
						<div className="home-pics-col1">
							<img src={home1} />
							<img src={home2} />
							<img src={home3} />
						</div>
						<div className="home-pics-col2">
							<img src={home4} />
							<img src={home5} />
							<img src={home6} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
