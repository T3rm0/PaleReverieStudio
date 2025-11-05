import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router";
function Contacts() {
	return (
		<div className="contacts-container">
			<h2>CONTACT US</h2>
			<div className="contacts">
				<Link
					to="https://www.instagram.com/palereveriestudio/"
					style={{ textDecoration: "none", color: "black" }}
				>
					{" "}
					<div className="insta">
						<FaInstagram size={30} color="black" />
						<p>: palereveriestudio</p>
					</div>
				</Link>
				<Link
					to="https://open.spotify.com/user/31i72ik5243bjhyudp32gddrgatm"
					style={{ textDecoration: "none", color: "black" }}
				>
					<div className="spoti">
						<FaSpotify size={30} color="black" />
						<p>: Pale Reverie</p>
					</div>
				</Link>
				<div className="mail">
					<CiMail size={30} />
					<p>: palereveriestudios@gmail.com</p>
				</div>

				<div className="phone">
					<IoIosPhonePortrait size={30} />
					<p>: +39 331 719 7065</p>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
