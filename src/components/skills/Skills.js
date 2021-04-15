import React from 'react';
import './Skills.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "auto",
        height: "auto",
        justifyContent: 'space-around',
        overflow: 'visible',
    },
}));

export default function Skills() {
    const classes = useStyles();
    return (
        <div className="skills__container">
            <h2 className="skills__heading"><u>My Skills</u></h2>
            <Grid container={false} className={classes.root} spacing={2}  >
                <Grid item={true} xs={12} spacing={2}>
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
                                    className="icon__title"
                                    position="below"
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(250,0,100,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
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
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png',
        title: 'Java',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
        title: 'Python',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
        title: 'JavaScript',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
        title: 'TypeScript',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png',
        title: 'C++',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
        title: 'HTML5',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
        title: 'CSS',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png',
        title: 'Django',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
        title: 'ReactJS',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png',
        title: 'Storybook',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png',
        title: 'SQL',
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png',
        title: 'MySQL',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
        title: 'Firebase',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/android/android.png',
        title: 'Android',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
        title: 'Git',
        cols: 2,
    },
    {
        img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png',
        title: 'Linux',
        cols: 2,
    },
    {
        img: 'https://camo.githubusercontent.com/58423e406b227112756822122631d9eca5ab83334a6f0d8f2a6305b086815747/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667',
        title: 'MaterialUI',
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/djr3obtg6/image/upload/v1/media/competence/cloud-api_civ34b',
        title: 'RestAPI',
        cols: 2,
    },
];
