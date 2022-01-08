import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import GamesIcon from "@material-ui/icons/Games";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import InfoIcon from "@material-ui/icons/Info";
import TuneIcon from "@material-ui/icons/Tune";
import Apps from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import {
	FaHome,
	FaAlignLeft,
	FaFolderPlus,
	FaUserCog,
	FaTasks,
	FaPhoneSquare,
} from "react-icons/fa";


export default function Navbar() {
	return (
		<div className="top">
			<nav className="sidebar w3-bar-block w3-small w3-hide-small w3-center">
				<ul className="sidebar__icons">
					<li>
						<Link to="/">
							<FaHome
								className="social-icon-hover"
								size="2em"
								color="green"
							/>
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to="/skills">
							<FaAlignLeft
								className="social-icon-hover"
								size="2em"
								color="blue"
							/>
							<p>Skills</p>
						</Link>
					</li>
					<li>
						<Link to="/projects">
							<FaFolderPlus
								className="social-icon-hover"
								size="2em"
								color="yellow"
							/>
							<p>Projects</p>
						</Link>
					</li>
					<li>
						<Link to="/resume">
							<FaUserCog
								className="social-icon-hover"
								size="2em"
								color="cyan"
							/>
							<p>Resume</p>
						</Link>
					</li>
					<li>
						<Link to="/games">
							<FaTasks
								className="social-icon-hover"
								size="2em"
								color="purple"
							/>
							<p>Games</p>
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<FaPhoneSquare
								className="social-icon-hover"
								size="2em"
								color="orange"
							/>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav>
			{/*Navbar on small screens (Hidden on medium and large screens)*/}
			<div
				className="small__sidebar w3-bottom w3-hide-large w3-hide-medium"
				id="myNavbar"
			>
				<div className="w3-bar w3-opacity w3-hover-opacity hover-black w3-center w3-small">
					<ul className="card__numbers">
						<li>
							<Link to="/">
								<FaHome
									
								/>
							</Link>
						</li>
						<li>
							<Link to="/skills">
								<FaAlignLeft
									
								/>
							</Link>
						</li>
						<li>
							<Link to="/projects">
								<p>
									<FaFolderPlus
										
									/>
								</p>
							</Link>
						</li>
						<li>
							<Link to="/resume">
								<FaUserCog
									
								/>
							</Link>
						</li>
						<li>
							<Link to="/games">
								<FaTasks
									
								/>
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<FaPhoneSquare
									
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
