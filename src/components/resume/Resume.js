import React from 'react';
import './Resume.css';
import Typography from '@material-ui/core/Typography';
import tripplo from '../../assets/images/tripplo.svg';
import uct from '../../assets/images/uct.png';
import blanktech from '../../assets/images/blanktech.png';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default function Resume() {
    return (
        <div className="resume__container">
            <h4 className="resume__heading">
                <strong><u>Summary</u></strong>
            </h4>
            <Typography component="p" className="typography">
                My name is Benedito Vesta Nassone. I'm a BSc Computer Science and Engineering graduate from UCT. I am a highly versatile individual, able to execute tasks with minimal Supervision. As a fast-learner I am able to speedily adapt to high-productive working environments while leveraging technology tools to deliver the best solution to client needs
            </Typography>
            <h4 className="resume__heading">
                <strong><u>Experience</u></strong>
            </h4>
            <div className="work__experience">
                <a href="www.tripplo.co">
                    <img src={tripplo} alt="Tripplo"></img>
                </a>
                <h5>Frontend Engineer - Internship</h5>
                <h6>03/2021 - 04/2021</h6>
                <ul>
                    <li>
                        Built React components using TypeScript and Tailwind css and ship them to npm.
                    </li>
                    <li>
                        Tested components using React Testing Library and Jest.
                    </li>
                    <li>
                        Designed the new Tripplo's UI Library in Figma.
                    </li>
                    <li>
                        Used Storybook to create and test UI components.
                    </li>
                </ul>
            </div>
            <div className="work__experience">
                <a href="https://www.blanktech.co.za">
                    <img src={blanktech} alt="BlankTech" style={{
                        width: '50px',
                        height: '50px'
                    }} /><strong>BlankTech</strong>
                </a>
                <h5>Backend Developer - Freelancing</h5>
                <h6>04/2020 - 08/2020</h6>
                <ul>
                    <li>
                        Oversaw back-end development using Django framework to maintain website integrity, security and efficiency.

                    </li>
                    <li>
                        Store, retrieve and manipulate data for analysis of system capabilities and requirements.
                    </li>
                    <li>
                        Writing supporting code for the web applications or web sites.
                    </li>
                </ul>
            </div>
            <h4 className="resume__heading">
                <strong><u>Education</u></strong>
            </h4>
            <a href="www.uct.ac.za">
                <img src={uct} alt="UCT"></img>
            </a>
            <h6>03/2017 - 12/2020</h6>
            <Typography component="p">Completed a BSc Computer Science and Computer Engineering from <strong>UCT</strong>
            </Typography>
            <h6><strong><u>Relavent Coursework</u></strong></h6>
            <ul>
                <li> Data Structures and Algorithms.</li>
                <li> Database Management Systems.</li>
                <li>Theory of Computation and Algorithms.</li>
                <li> Parallel and Concurrent programming in Java.</li>
                <li> Computer Networks and Operating Systems.</li>
                <li> Computer Networks and Operating Systems.</li>
                <li> Machine Learning in C++</li>
                <li> Embedded and Information Systems</li>
            </ul>

            <h4 className="resume__heading">
                <strong><u>Certifications</u></strong>
            </h4>
            <ImageList
                sx={{
                    width: "auto",
                    height: "auto",
                    overflow: "hidden",
                    // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                    transform: 'translateZ(0)',
                }}
                cols={2}
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
        </div>
    );
}

const itemData = [
    {
        img: 'https://www.sololearn.com/Certificate/1023-4326648/jpg/',
        title: 'CSS',
        author: '@Sololearn',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://www.sololearn.com/certificates/course/en/4326648/1024/landscape/png',
        title: 'JavaScript',
        author: '@Sololearn',
    },
    {
        img: 'https://www.sololearn.com/certificates/course/en/4326648/1073/landscape/png',
        title: 'Python 3',
        author: '@Sololearn',
    },
    {
        img: 'https://www.sololearn.com/Certificate/1014-4326648/jpg',
        title: 'HTML5',
        author: '@Sololearn',
    },
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a3ad8537-d2c2-4a76-ba8d-8b5a123c1bf6.jpg',
        title: 'C++',
        author: '@Udemy',
        cols: 2,
    },
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f92785ff-d30d-40cf-a282-dfbcebb48a56.jpg',
        title: 'CMD',
        author: '@Udemy',
        cols: 2,
    },
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4b5003d0-0186-4fee-ac0f-1ee89bd54b4a.jpg',
        title: 'Web Dev',
        author: '@Udemy',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-61b8b8a7-a72b-44d7-8f02-548799c37ee8.jpg',
        title: 'Ethical Hacking',
        author: '@Udemy',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-23754f4b-423c-45f6-90a7-fb9b0f556df8.jpg',
        title: 'Java',
        author: '@Udemy',
        rows: 2,
        cols: 2,
        featured: true,
    },
];
