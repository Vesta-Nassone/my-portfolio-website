import React, { Component } from 'react'
import './Navbar.css'
import logo from './logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="sidebar w3-bar-block w3-small w3-hide-small w3-center">
                    {/* Avatar image in top left corner */}
                    <img src={logo} alt="avatar" className="navbar__image"/>
                    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i class="fa fa-home w3-xxlarge"></i>
                        <p>HOME</p>
                    </a>
                    <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i class="fa fa-user w3-xxlarge"></i>
                        <p>ABOUT</p>
                    </a>
                    <a href="#photos" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i class="fa fa-eye w3-xxlarge"></i>
                        <p>PHOTOS</p>
                    </a>
                    <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                        <i class="fa fa-envelope w3-xxlarge"></i>
                        <p>CONTACT</p>
                    </a>
                </nav>

                {/* Navbar on small screens (Hidden on medium and large screens) */}
                <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                    <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                        <a href="#" class="w3-bar-item w3-button small__screen"
                        >HOME</a
                        >
                        <a href="#about" class="w3-bar-item w3-button small__screen"
                        >ABOUT</a
                        >
                        <a
                        href="#photos"
                        class="w3-bar-item w3-button small__screen"
                        >PHOTOS</a
                        >
                        <a
                        href="#contact"
                        class="w3-bar-item w3-button small__screen"
                        >CONTACT</a
                        >
                    </div>
                </div>
            </div>
        )
    }
}
