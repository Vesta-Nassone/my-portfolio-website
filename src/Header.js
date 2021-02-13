import React, { Component } from 'react'
import logo from './logo.svg';
import banner from './banner.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="main" className="w3-padding-small w3-grey" style={{
                    width:"100%",
                    height:"200px"
                }}>
                    {/*Header/Home */}
                    {/* <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
                        <img
                            src={banner}
                            alt="my image"
                            class="w3-image header__image"/>
                    </header> */}
                </div>  
            </div>
        )
    }
}
