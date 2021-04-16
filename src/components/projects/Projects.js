import React from 'react';
import "./Projects.css";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "auto",
        height: "auto",
        justifyContent: 'space-around',
        overflow: 'visible',
    },
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <div className="projects__container">
            <h2 className="projects__heading"><u>Projects</u></h2>
            <Grid className={classes.root} spacing={2}  >
                <Grid container item xs={12} spacing={2}>
                    <ImageList
                        sx={{
                            width: "auto",
                            height: "auto",
                            overflow: "visible",
                            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                            transform: 'translateZ(0)',
                        }}
                        cols={3}
                        gap={6}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}
                                className="imageList__hover">
                                <img
                                    srcSet={`${item.img}?w=248&auto=format 1x,
                ${item.img}?w=248&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    className="icon__title"
                                    position="below"
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(250,0,100,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                     actionIcon={
                                            <IconButton
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.54)',
                                                }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon className="imageList__hover" />
                                            </IconButton>
                                        }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid >
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Project 1',
        author: '@vesta-nassone',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Project 2',
        author: '@vesta-nassone',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Project 3',
        author: '@vesta-nassone',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Project 4',
        author: '@vesta-nassone',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Project 5',
        author: '@vesta-nassone',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Project 6',
        author: '@vesta-nassone',
        rows: 2,
        cols: 2,
        featured: true,
    },
];