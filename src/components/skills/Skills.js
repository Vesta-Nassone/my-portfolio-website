import React from 'react';
import './Skills.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 100,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    rectangle: {
        width: '100%',
        height: 'auto',
    },
}));

const cards = [
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/html5_j1ggtf",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/css_rjs4dx",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/javascript-js-seeklogo.com_fv74oo",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/python_qwwpex",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/django_sgm62v",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/github_lbprja",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/c_j8m7hb",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/linux_utgssw",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/git_s7jvap",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/visual-studio-code-seeklogo.com_xdrah1",
    "https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/cloud-api_civ34b"
];


export default function Skills() {
    const classes = useStyles();
    return (
        <div className="skills__container">
            <h2 className="skills__heading">
                My Skills
            </h2>
            <Grid container className={classes.root} spacing={2} >
                <Grid item xs={12}>
                    <Grid justifyContent="center" spacing={2}>
                        <ImageList sx={{ width: "auto", height: "auto" }}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=248&auto=format 1x,
                ${item.img}?w=248&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        // subtitle={item.author}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </Grid >
        </div>
    );
}
