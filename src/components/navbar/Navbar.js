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
								size="2.5em"
								color="green"
							/>
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to="/skills">
							<FaAlignLeft
								className="social-icon-hover"
								size="2.5em"
								color="blue"
							/>
							<p>Skills</p>
						</Link>
					</li>
					<li>
						<Link to="/projects">
							<FaFolderPlus
								className="social-icon-hover"
								size="2.5em"
								color="yellow"
							/>
							<p>Projects</p>
						</Link>
					</li>
					<li>
						<Link to="/resume">
							<FaUserCog
								className="social-icon-hover"
								size="2.5em"
								color="cyan"
							/>
							<p>Resume</p>
						</Link>
					</li>
					<li>
						<Link to="/games">
							<FaTasks
								className="social-icon-hover"
								size="2.5em"
								color="purple"
							/>
							<p>Goals</p>
						</Link>
					</li>
					<li>
						<Link to="/contact">
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
							<Link to="/">
								<FaHome size="2em" color="green" />
							</Link>
						</li>
						<li>
							<Link to="/skills">
								<FaAlignLeft size="2em" color="blue" />
							</Link>
						</li>
						<li>
							<Link to="/projects">
								<p>
									<FaFolderPlus size="2em" color="yellow" />
								</p>
							</Link>
						</li>
						<li>
							<Link to="/resume">
								<FaUserCog size="2em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/games">
								<FaTasks size="2em" color="cyan" />
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<FaPhoneSquare size="2em" color="yellow" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
