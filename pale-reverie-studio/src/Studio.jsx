import "./App.css";
import studiopic1 from "./assets/P1015099_s.jpg";
import studiopic2 from "./assets/P1015106_s.jpg";
import studiopic3 from "./assets/P1015123_s.jpg";
import studiopic4 from "./assets/P1015153_s.jpg";
import studiopic5 from "./assets/P1015095_crop.png";
import studiopic6 from "./assets/P1015101_crop.png";

function Studio() {
	return (
		<div>
			<div className="studio-section">
				<h2>THE STUDIO</h2>
				<p>
					The studio is built to satisfy different needs with a
					mixture of analog and digital equipment. We like to
					experiment and dig deep into the rabbit holes of sound
					design to create unique sounds and textures.
				</p>
				<div className="studio-pics">
					<div className="pics-col1">
						<img src={studiopic1} />
						<img src={studiopic3} />
						<img src={studiopic5} />
					</div>
					<div className="pics-col2">
						<img src={studiopic4} />
						<img src={studiopic2} />
						<img src={studiopic6} />
					</div>
				</div>
			</div>
			<div className="equipment-section">
				<h2>OUR EQUIPMENT</h2>
				<div className="equipment-buttons">
					<div className="button-col1">
						<h3>MICROPHONES</h3>
						<div className="equip-description">
							<p>- Shure SM57 </p>
							<p>- Aston Origin</p>
							<p>- Aston Spirit</p>
							<p>- Antelope Edge Solo</p>
							<p>- sE Electronics sE7</p>
						</div>
						<h3>OUTBOARD GEAR</h3>
						<div className="equip-description">
							<p>- Behringer Ultragain Pro</p>
							<p>- Behringer Autocom Pro-XL</p>
							<p>- UAD Apollo Twin</p>
							<p>- Antelope Discrete 8 Pro</p>
							<p>- Focusrite Scarlett 18i20</p>
							<p>- Line6 Helix</p>
							<p>- Fractal FM3</p>
						</div>
					</div>
					<div className="button-col2">
						<h3>MONITORING</h3>
						<div className="equip-description monitor">
							<p>- Focal Shape Twin</p>
							<p>- Adam A3X</p>
						</div>
						<h3>INSTRUMENTS</h3>
						<div className="equip-description">
							<p>- Squier CV60 Jazzmaster</p>
							<p>- Ibanez S320</p>
							<p>- Jackson JS32-8 </p>
							<p>- PRS SE custom 24</p>
							<p>- Squier Jazzmaster J Mascis</p>
							<p>- Fender Stratocaster 75th Anniversary</p>
							<p>- Fender Vintera Telecaster</p>
							<p>- Sire V3 5</p>
							<p>- Sire P5 5</p>
						</div>
					</div>
					<div className="button-col3">
						<h3>CONTROLLERS</h3>
						<div className="equip-description controller">
							<p>- Studiologic SL88 Studio</p>
							<p>- Native Instruments Komplete Kontrol Mk2</p>
							<p>- Machine Mikro Mk3</p>
							<p>- Icon QCon Pro G2</p>
						</div>
						<h3>SYNTHS</h3>
						<div className="equip-description">
							<p>- KORG MS20</p>
							<p>- KORG Minilogue xd</p>
							<p>- KORG Volca Keys</p>
							<p>- KORG Volca Bass</p>
							<p>- Roland JU-06A</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Studio;
