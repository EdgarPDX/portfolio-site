import React from 'react';
import styles from './Footer.module.css';
import github from '../assets/images/github.png'

export const Footer = () => {
 
    return (
        <footer className={styles.headerComponent}>
            <a href="https://github.com/edgarpdx"target="_blank" rel="noreferrer">
                <img className={styles.contactLinks} src={github} alt='github link'/>
              </a>
            <img className={styles.contactLinks} alt='links'/>
            <h2 className={styles.heading}>Contact Me</h2>
            <img className={styles.contactLinks} alt='links'/>
            <img className={styles.contactLinks} alt='links'/>
        </footer>
    )
}

export default Footer;
