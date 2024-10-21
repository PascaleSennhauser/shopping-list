import React, { Component } from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <nav className={styles.navbar}>
            <a href="/"><img className={styles.image} src="./assets/img/logo.png" /></a>
            What do you shop today?
        </nav>
            );
    }
}
 
export default Navbar;