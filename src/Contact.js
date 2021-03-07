import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Contact.css";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import IconButton from '@material-ui/core/IconButton';
import Send from "@material-ui/icons/Send";
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact__card">
      <h1 className="card__heading animate-fading">Contact Me</h1>
      <div className="card__images">
      </div>
      <ul className="card__numbers animate-opacity">
        <li className="card__number">+27</li>
        <li className="card__number">68</li>
        <li className="card__number">101</li>
        <li className="card__number">3400</li>
      </ul>
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
      <div>
        <ul className="card__socialIcons">
          <li>
            <IconButton className="social-icon-hover">
              <FaFacebook size="2em" color="blue" />
            </IconButton>
          </li>
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
              <FaInstagram size="2em" color="#fb3958" />
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
