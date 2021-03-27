import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import avatar from './avatar.jpeg';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
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
        width: "auto",
        height: "auto",
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
                    Hi<span>👋🏾</span> I am <br></br>
                    <Typed strings={["Vesta Nassone"]} typeSpeed={40} />
                </Typography>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed
                        strings={[
                            "Frontend Developer",
                            "Backend Developer",
                            "Android App Developer",
                            "AWS Enthusiast",
                            "Cyber Security Hobbyist"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </Typography>
            </Box>
            <div className="social__icons">
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
        </animated.div>
    );
};

export default Header;
