import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import logo from './logo.svg';
import avatar from './avatar.jpg';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import GamesIcon from '@material-ui/icons/Games';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    rootImage: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItem: {
        color: "black",
    },
    avatar: {
        display: "flex"
    }
}));

const menuItems = [
    { listIcon: <HomeIcon fontSize="large" />, listText: "Home", listPath: "/" },
    { listIcon: <PersonOutlineIcon fontSize="large" />, listText: "About", listPath: "/about" },
    { listIcon: <Apps fontSize="large" />, listText: "Projects", listPath: "/projects" },
    { listIcon: <InfoIcon fontSize="large" />, listText: "Resume", listPath: "/resume" },
    { listIcon: <GamesIcon fontSize="large" />, listText: "Games", listPath: "/games" },
    { listIcon: <ContactPhoneIcon fontSize="large" />, listText: "Contact", listPath: "/contact" },
];


export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        open === true ? setOpen(false) : setOpen(true);
    };

    return (
        <React.Fragment>
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <div className="nav">
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <Toolbar>
                                <IconButton onClick={handleClick}>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </div>
                        <Divider />
                        <List className={classes.root}>
                            {/* <ListItemAvatar>
                                <Avatar className={classes.avatar}>VN</Avatar>
                            </ListItemAvatar> */}
                            <ListItemText
                                primary={<React.Fragment><img className={classes.rootImage} src={avatar} /></React.Fragment>}
                                secondary="vestanassone@gmail.com"
                            />
                        </List>
                        <Divider />
                        <List>
                            {menuItems.map((item, i) => (
                                <ListItem
                                    button
                                    key={i}
                                    className={classes.listItem}
                                    component={Link}
                                    to={item.listPath}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemIcon className={classes.listItem}>
                                        {item.listIcon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.listText} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </Drawer>

                </div>
            </div>
        </React.Fragment>
    );
}
