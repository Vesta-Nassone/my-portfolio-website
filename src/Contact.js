import React from "react";
import "./Contact.css";
import IconButton from '@material-ui/core/IconButton';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact__card">
      <h1 className="card__heading animate-fading">Contact Me</h1>
      <ul className="card__numbers animate-opacity">
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
              <FaTwitter size="2em" color="#1DA1F2" />
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <FaGithub size="2em" color="black" />
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <FaWhatsapp size="2em" color="green" />
            </IconButton>
          </li>
          <li>
            <IconButton className="social-icon-hover">
              <FaLinkedin size="2em" color="#0077B5" />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
