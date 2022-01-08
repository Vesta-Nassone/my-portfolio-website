import React from "react";
import {
	FaAlignLeft,
	FaFolderPlus,
	FaHome,
	FaPhoneSquare,
	FaTasks,
	FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="top">
			<nav className="sidebar hide-small center">
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
				className="small__sidebar bottom w3-hide-large w3-hide-medium"
				id="myNavbar"
			>
				<div className="w3-bar w3-opacity w3-hover-opacity hover-black w3-center w3-small">
					<ul className="card__numbers">
						<li>
							<Link to="/">
								<FaHome size="3em" color="green" />
							</Link>
						</li>
						<li>
							<Link to="/skills">
								<FaAlignLeft size="3em" color="blue" />
							</Link>
						</li>
						<li>
							<Link to="/projects">
								<p>
									<FaFolderPlus size="3em" color="yellow" />
								</p>
							</Link>
						</li>
						<li>
							<Link to="/resume">
								<FaUserCog size="3em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/games">
								<FaTasks size="3em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<FaPhoneSquare size="3em" color="yellow" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
