import React, { Component } from 'react'
import logo from './logo.svg';
import banner from './banner.png'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    {/*Header/Home */}
                    <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                        <h1 class="w3-jumbo">
                            <span class="w3-hide-small">I'm</span> Benedito Nassone
                        </h1>
                        <p>Software Engineer</p>
                        <img
                            src={banner}
                            alt="my image"
                            class="w3-image header__image"/>
                    </header>
                </div>  
            </div>
        )
    }
}
