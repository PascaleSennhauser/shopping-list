import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <nav>
            <a href="/"><img src="./assets/img/logo.png" /></a>
            What do you shop today?
        </nav>
            );
    }
}
 
export default Navbar;