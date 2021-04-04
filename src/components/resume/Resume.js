import React from 'react';
import './Resume.css';
import Typography from '@material-ui/core/Typography';
import tripplo from '../../assets/images/tripplo.svg';
import uct from '../../assets/images/uct.png';
import blanktech from '../../assets/images/blanktech.png';

export default function Resume() {
    return (
        <div className="resume__container">
            <h4 className="resume__heading">
                <strong><u>Summary</u></strong>
            </h4>
            <Typography component="p" className="typography">
                My name is Benedito Vesta Nassone. I'm a BSc Computer Science and Engineering graduate from UCT. I am a highly versatile individual, able to execute tasks with minimal Supervision. <br /><br />From the moment I produced "Hello World" in the console of my first application using Python. I knew I was hooked into the realm of software development, but software has never been "just a job for me" or just a rewarding career financially, its offered an engaging challenge to continuously learn and improve my skills in creating high-quality software.
            </Typography>
            <h4 className="resume__heading">
                <strong><u>Experience</u></strong>
            </h4>
            <div className="tripplo__experience">
                <a href="www.tripplo.co">
                    <img src={tripplo} alt="Tripplo"></img>
                </a>
                <h6>03/2021 - Present</h6>
                <Typography component="p">I am currently Interning at Tripplo Software as a <strong>Frontend Engineer</strong>
                </Typography>
                <ul>
                    <li>
                        Typescript
                    </li>
                    <li>
                        Javascript
                    </li>

                    <li>
                        React
                    </li>
                </ul>
            </div>
            <div className="tripplo__experience">
                <a href="https://www.blanktech.co.za">
                    <img src={blanktech} alt="BlankTech" style={{
                        width: '50px',
                        height: '50px'
                    }}/>
                </a>
                <h6>04/2020 - 08/2020</h6>
                <Typography component="p">I am currently Interning at Tripplo Software as a <strong>Frontend Engineer</strong>
                </Typography>
                <ul>
                    <li>
                        Typescript
                    </li>
                    <li>
                        Javascript
                    </li>

                    <li>
                        React
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
                <li>
                    Typescript
                    </li>
                <li>
                    Javascript
                    </li>

                <li>
                    React
                    </li>
            </ul>
        </div>
    );
}
