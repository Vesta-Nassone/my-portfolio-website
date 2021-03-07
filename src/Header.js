import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "./avatar.jpg";
import "./Header.css";
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "red",
    },
    subtitle: {
        color: "black",
        textTransform: "uppercase",
    },
    typedContainer: {
        width: "400px",
        height: "250px",
        textAlign: "center",
        zIndex: 1,
    },
}));
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Header = () => {
    const classes = useStyles();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }));

    return (
        <animated.div
            className="header__card"
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}>

            <Box className={classes.typedContainer}>
                <Grid container justify="center">
                    <Avatar className={classes.avatar} src={avatar} alt="Vesta Nassone" />
                </Grid>
                <Typography className={classes.title} variant="h4">
                    Hi I am <br></br>
                    <Typed strings={["Benedito Vesta Nassone"]} typeSpeed={40} />
                </Typography>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed
                        strings={[
                            "Frontend Developer",
                            "Backend Developer",
                            "Android App Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </Typography>
            </Box>
            <div>
                <ul className="card__socialIcons">
                    <li>
                        <IconButton>
                            <FaFacebook size="2em" color="blue" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <FaTwitter size="2em" color="#1DA1F2" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <FaGithub size="2em" color="black" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <FaWhatsapp size="2em" color="green" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <FaInstagram size="2em" color="#fb3958" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <FaLinkedin size="2em" color="#0077B5" />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </animated.div>
    );
};

export default Header;
