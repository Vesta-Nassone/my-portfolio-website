import React from 'react';
import './Skills.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: 5
    },
}));

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
];
