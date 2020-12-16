import React from 'react';
import styles from './Footer.module.css';
import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';

export const Footer = () => {
 
    return (
        <footer className={styles.footerComponent}>
            <a href="https://github.com/edgarpdx"target="_blank" rel="noreferrer">
                    <img className={styles.outsideLink} src={github} alt='github link'/>
                </a>
                <a href="https://www.linkedin.com/in/edgarpdx/"target="_blank" rel="noreferrer">
                    <img className={styles.outsideLink} src={linkedIn} alt='linkedin link'/>
                </a>
        </footer>
    )
}

export default Footer;
