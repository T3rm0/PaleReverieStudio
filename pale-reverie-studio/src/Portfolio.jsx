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
					loading="lazy"
				></iframe>
			</div>

			<div className="portfolio-yt">
				<h2>COMPOSITION</h2>
				<p>
					Some videos demonstrating our composition skills, which
					could be tied to videogames and other media.
				</p>
				<div className="yt-frame-grid">
					<div className="yt-frame">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/h5o_aWQlLsQ?si=mzfH2eRinBFTWYTH"
							title="TetherGeist - Indie Game Music Contest 2025"
							frameborder="0"
							allowfullscreen
							style={{ filter: "grayscale(100%)" }}
						></iframe>
					</div>
					<div className="yt-frame">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube-nocookie.com/embed/3eMv-57s22k"
							title='"Little town" - 16Bit music short clip'
							frameborder="0"
							allowfullscreen
							style={{ filter: "grayscale(100%)" }}
						></iframe>
					</div>
					<div className="yt-frame">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube-nocookie.com/embed/Uk2hW2Z_w-I"
							title='"Soothe" - Orchestral music short clip'
							frameborder="0"
							allowfullscreen
							style={{ filter: "grayscale(100%)" }}
						></iframe>
					</div>
					<div className="yt-frame">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube-nocookie.com/embed/pW7OlERDEwk"
							title='"Start the adventure!" - Orchestral music short clip'
							frameborder="0"
							allowfullscreen
							style={{ filter: "grayscale(100%)" }}
						></iframe>
					</div>
				</div>
				<div className="yt-frame last">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/cfvOv2WSSD0"
						title="Battle, begin! - 16bit music clip"
						frameborder="0"
						allowfullscreen
						style={{ filter: "grayscale(100%)" }}
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
