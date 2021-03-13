import React from 'react';
import avatar from "./avatar.jpg";
import { makeStyles } from '@material-ui/core/styles';
import "./Navbar.css";
import GamesIcon from '@material-ui/icons/Games';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Apps from "@material-ui/icons/Apps";
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    listItem: {
        color: "silver",
        fontFamily: 'Courier Prime mono'
    },
}));

const menuItems = [
    { listIcon: <HomeIcon fontSize="large" />, listText: "Home", listPath: "/" },
    { listIcon: <PersonOutlineIcon fontSize="large" />, listText: "About", listPath: "/about" },
    { listIcon: <Apps fontSize="large" />, listText: "Projects", listPath: "/projects" },
    { listIcon: <InfoIcon fontSize="large" />, listText: "Resume", listPath: "/resume" },
    { listIcon: <GamesIcon fontSize="large" />, listText: "Games", listPath: "/games" },
    { listIcon: <ContactPhoneIcon fontSize="large" />, listText: "Contact", listPath: "/contact" },
];
export default function Navbar() {
    const classes = useStyles();
    return (
        <div className="w3-top">
            <nav className="sidebar w3-bar-block w3-small w3-hide-small w3-center">
                {/*Avatar image in top left corner*/}
                <img src={avatar} style={{ width: "100%" }} /><br /><br />
                <List>
                    {menuItems.map((item, i) => (
                        <ListItem
                            button
                            key={i}
                            className={classes.listItem}
                            component={Link}
                            to={item.listPath}
                        >
                            <ListItemIcon className={classes.listItem}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={item.listText} />
                        </ListItem>
                    ))}
                </List>
            </nav>
            {/*Navbar on small screens (Hidden on medium and large screens)*/}
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <a href="#" className="w3-bar-item w3-button" style={{
                        width: "25% !important"
                    }}>HOME</a>
                    <a href="#about" className="w3-bar-item w3-button" style={{
                        width: "25% !important"
                    }}>ABOUT</a>
                    <a href="#photos" className="w3-bar-item w3-button" style={{
                        width: "25% !important"
                    }}>PHOTOS</a>
                    <a href="#contact" className="w3-bar-item w3-button" style={{
                        width: "25% !important"
                    }}>CONTACT</a>
                </div>
            </div>
        </div>
    );
}
