import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className={styles.footer}>
                <a className={styles.link} href="imprint">Imprint & Privacy Policy</a>
            </footer>
        );
    }
}
 
export default Footer;