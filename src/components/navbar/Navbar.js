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
						<Link to="/" aria-label="Home">
							<FaHome
								className="social-icon-hover"
								size="2.5em"
								color="green"
							/>
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to="/skills" aria-label="Skills">
							<FaAlignLeft
								className="social-icon-hover"
								size="2.5em"
								color="blue"
							/>
							<p>Skills</p>
						</Link>
					</li>
					<li>
						<Link to="/projects" aria-label="Projects">
							<FaFolderPlus
								className="social-icon-hover"
								size="2.5em"
								color="yellow"
							/>
							<p>Projects</p>
						</Link>
					</li>
					<li>
						<Link to="/resume" aria-label="Resume">
							<FaUserCog
								className="social-icon-hover"
								size="2.5em"
								color="cyan"
							/>
							<p>Resume</p>
						</Link>
					</li>
					<li>
						<Link to="/games" aria-label="Goals">
							<FaTasks
								className="social-icon-hover"
								size="2.5em"
								color="purple"
							/>
							<p>Goals</p>
						</Link>
					</li>
					<li>
						<Link to="/contact" aria-label="Contacts">
							<FaPhoneSquare
								className="social-icon-hover"
								size="2.5em"
								color="orange"
							/>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav>

			{/*Navbar on small screens (Hidden on medium and large screens)*/}
			<div
				className="small__sidebar bottom hide-large hide-medium"
				id="myNavbar"
			>
				<div className="center">
					<ul className="card__numbers">
						<li>
							<Link to="/" aria-label="Home">
								<FaHome size="2em" color="green" />
							</Link>
						</li>
						<li>
							<Link to="/skills" aria-label="Skills">
								<FaAlignLeft size="2em" color="blue" />
							</Link>
						</li>
						<li>
							<Link to="/projects" aria-label="Projects">
								<FaFolderPlus size="2em" color="yellow" />
							</Link>
						</li>
						<li>
							<Link to="/resume" aria-label="Resume">
								<FaUserCog size="2em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/games" aria-label="Goals">
								<FaTasks size="2em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/contact" aria-label="Contacts">
								<FaPhoneSquare size="2em" color="yellow" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
