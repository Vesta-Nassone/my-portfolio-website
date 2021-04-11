import React from "react";
import "./Contact.css";
import IconButton from '@material-ui/core/IconButton';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact__card">
      <h1 className="card__heading">Contact Me</h1>
      <ul className="card__numbers ">
        <li className="card__number">+27</li>
        <li className="card__number">68</li>
        <li className="card__number">101</li>
        <li className="card__number">3400</li>
      </ul>
      <div>
        <form action="/action_page.php" target="_blank">
          <p>
            <input placeholder="Name" autoComplete="on" className="card__input" />
          </p>
          <p>
            <input placeholder="Email" autoComplete="on" className="card__input" />
          </p>
          <p>
            <input placeholder="Subject" className="card__input" />
          </p>
          <p>
            <input placeholder="Message" className="card__input" />
          </p>
          <p>
            <button className="card__button">Send Message</button>
          </p>
        </form>
      </div>

      <div>
        <ul className="card__socialIcons">
          <li>
            <IconButton className="social-icon-hover">
              <a
                href="https://twitter.com/NassoneVesta"
                rel="noreferrer"
                target="_blank"
              ><FaTwitter size="2em" color="#1DA1F2" /></a>
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <a href="https://github.com/Vesta-Nassone"
                rel="noreferrer"
                target="_blank"
              ><FaGithub size="2em" color="black" /></a>
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <a href="https://wa.me/27681013400"
                rel="noreferrer"
                target="_blank"
              ><FaWhatsapp size="2em" color="green" /></a>
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <a href="https://www.linkedin.com/in/vesta-nassone-77b6a115b/"
                rel="noreferrer"
                target="_blank"
              ><FaLinkedin size="2em" color="#0077B5" /></a>
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;