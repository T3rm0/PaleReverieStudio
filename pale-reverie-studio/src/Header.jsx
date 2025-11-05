import { Link } from "react-router";
import "./App.css";
import image from "./assets/IMG_1283.PNG";

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<Link to="/">
					<img src={image} width="100" height="100"></img>
				</Link>
			</div>
			<div className="links">
				<Link to="/studio" className="link">
					Studio
				</Link>
				<Link to="/portfolio" className="link">
					Portfolio
				</Link>
				<Link to="/contacts" className="link">
					Contacts
				</Link>
			</div>
		</div>
	);
}

export default Header;
