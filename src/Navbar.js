import React from 'react';
import "./Navbar.css";
import GamesIcon from '@material-ui/icons/Games';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Apps from "@material-ui/icons/Apps";
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { brown } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w3-top">
            <nav className="sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src={'https://drive.google.com/uc?export=view&id=1dqRHxE62MEjLCtmPG943bUqG9jCjq5Nx'} alt="Vesta Nassone" style={{ width: "100%" }} />
                <ul className="sidebar__icons">
                    <li>
                        <Link to="/"><HomeIcon
                            style={{
                                fontSize: 50,
                                color: green[600]
                            }} /><p>Home</p></Link>
                    </li>
                    <li>
                        <Link to="/about"><PersonOutlineIcon style={{ fontSize: 50, color: brown[800] }} /><p>About</p></Link>
                    </li>
                    <li>
                        <Link to="/projects"><Apps style={{ fontSize: 50, color: blue[200] }} /><p>Projects</p></Link>
                    </li>
                    <li>
                        <Link to="/resume"><InfoIcon style={{ fontSize: 50, color: red[500] }} /><p>Resume</p></Link>
                    </li>
                    <li>
                        <Link to="/games"><GamesIcon style={{ fontSize: 50, color: orange[600] }} /><p>Games</p></Link>
                    </li>
                    <li>
                        <Link to="/contact"><ContactPhoneIcon style={{ fontSize: 50, color: yellow[700] }} /><p>Contact</p></Link>
                    </li>
                </ul>
            </nav>
            {/*Navbar on small screens (Hidden on medium and large screens)*/}
            <div className="small__sidebar w3-bottom w3-hide-large w3-hide-medium" id="myNavbar">
                <div className="w3-bar w3-opacity w3-hover-opacity hover-black w3-center w3-small">
                    <ul className="card__numbers">
                        <li>
                            <Link to="/"><HomeIcon style={{ fontSize: 50, color: green[600] }} /></Link>
                        </li>
                        <li>
                            <Link to="/about"><PersonOutlineIcon style={{ fontSize: 50, color: brown[500] }} /></Link>
                        </li>
                        <li>
                            <Link to="/projects"><p><Apps style={{ fontSize: 50, color: blue[600] }} /></p></Link>
                        </li>
                        <li>
                            <Link to="/resume"><InfoIcon style={{ fontSize: 50, color: red[400] }} /></Link>
                        </li>
                        <li>
                            <Link to="/games"><GamesIcon style={{ fontSize: 50, color: orange[600] }} /></Link>
                        </li>
                        <li>
                            <Link to="/contact"><ContactPhoneIcon style={{ fontSize: 50, color: yellow[400] }} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
