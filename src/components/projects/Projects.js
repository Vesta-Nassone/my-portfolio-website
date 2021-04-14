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
        flexGrow: 1,
        paddingBottom: 10
    },
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <div className="projects__container">
            <h2 className="projects__heading"><u>Projects</u></h2>
            <Grid container spacing={2} >
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

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];