import React, { useEffect, useState } from "react";
import "./Contact.css";
import IconButton from "@material-ui/core/IconButton";
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Contact() {
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		if (window.location.search.includes("success=true")) {
			setSuccess(true);
		}
	}, []);
	return (
		<div className="contact__card">
			<h1 className="card__heading">Contact Me</h1>
			{success && (
				<p style={{ color: "green" }}>Thanks for your message! </p>
			)}
			<ul className="card__numbers ">
				<li className="card__number">+27</li>
				<li className="card__number">69</li>
				<li className="card__number">161</li>
				<li className="card__number">5499</li>
			</ul>
			<div>
				<form
					name="contact"
					method="POST"
					action="/contact/?success=true"
					netlify-honeypot="bot-field"
					data-netlify="true"
					data-netlify-recaptcha="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<input
						placeholder="Name"
						autoComplete="on"
						className="card__input"
					/>
					<input
						placeholder="Email"
						autoComplete="on"
						className="card__input"
					/>
					<input placeholder="Subject" className="card__input" />
					<input placeholder="Message" className="card__input" />
					<div data-netlify-recaptcha="true"></div>
					<button className="card__button" type="submit">
						Send Message
					</button>
				</form>
			</div>

			<div>
				<ul className="card__socialIcons">
					<li>
						<IconButton
							className="social-icon-hover"
							aria-label="Twitter"
						>
							<a
								href="https://twitter.com/NassoneVesta"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter size="2em" color="#1DA1F2" />
							</a>
						</IconButton>
					</li>
					<li>
						<IconButton
							className="social-icon-hover"
							aria-label="GitHub"
						>
							<a
								href="https://github.com/Vesta-Nassone"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="GitHub"
							>
								<FaGithub size="2em" color="black" />
							</a>
						</IconButton>
					</li>
					<li>
						<IconButton
							className="social-icon-hover"
							aria-label="Whatsapp"
						>
							<a
								href="https://wa.me/27691615499"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Whatsapp"
							>
								<FaWhatsapp size="2em" color="green" />
							</a>
						</IconButton>
					</li>
					<li>
						<IconButton
							className="social-icon-hover"
							aria-label="Linkedin"
						>
							<a
								href="https://www.linkedin.com/in/vesta-nassone/"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin size="2em" color="#0077B5" />
							</a>
						</IconButton>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contact;
