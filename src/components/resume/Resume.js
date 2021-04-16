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
                My name is Benedito Vesta Nassone. I'm a BSc Computer Science and Engineering graduate from UCT. I am a highly versatile individual, able to execute tasks with minimal Supervision.As a fast-learner I am able to speedily adapt to high-productive working environments while leveraging technology tools to deliver the best solution to client needs
            </Typography>
            <h4 className="resume__heading">
                <strong><u>Experience</u></strong>
            </h4>
            <div className="tripplo__experience">
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
            <div className="tripplo__experience">
                <a href="https://www.blanktech.co.za">
                    <img src={blanktech} alt="BlankTech" style={{
                        width: '50px',
                        height: '50px'
                    }} />
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
        </div>
    );
}
