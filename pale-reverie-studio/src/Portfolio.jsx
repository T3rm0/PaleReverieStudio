import "./App.css";
function Portfolio() {
	return (
		<div>
			<div className="portfolio-spoti">
				<h2>PRODUCTION, MIX AND MASTERING</h2>
				<p>
					A playlist with all the tracks that we've worked on:
					arranging, producing, mixing and mastering.
				</p>
				<iframe
					data-testid="embed-iframe"
					src="https://open.spotify.com/embed/playlist/48i9595slorfRNTzVVIU1G?utm_source=generator"
					width="50%"
					height="500"
					frameBorder="0"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>

			<div className="portfolio-yt">
				<h2>COMPOSITION</h2>
				<p>
					Some videos demonstrating our composition skills, which
					could be tied to videogames and other media.
				</p>
				<div className="yt-frame">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/h5o_aWQlLsQ?si=mzfH2eRinBFTWYTH"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						style={{ filter: "grayscale(100%)" }}
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
