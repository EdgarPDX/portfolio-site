import React from 'react';
import styles from './Footer.module.css';
import Resume from '../../assets/images/Cuellar, Edgar - Resume.pdf'
import Passport from '../../assets/images/Edgar- Talent Passport.pdf'

export const Footer = () => {
 
    return (
        <footer className={styles.footerComponent}>
            <a className={styles.footerLinks}href="https://github.com/edgarpdx"target="_blank" rel="noreferrer" title="Visit my Github page!">
               GITHUB
            </a>
            
            <a className={styles.footerLinks}href="https://www.linkedin.com/in/edgarpdx/"target="_blank" rel="noreferrer" title="Visit my LinkedIn and connect with me!">
                LINKEDIN
            </a>
            <a className={styles.footerLinks}href={Resume} target="_blank" rel="noreferrer" title="See my resume">
                RESUME
            </a>
            <a className={styles.footerLinks}href={Passport} target="_blank" rel="noreferrer" title="Checkout my Talent Passport">
                TALENT PASSPORT
            </a>
            <a className={styles.footerLinks}href="https://www.instagram.com/edgar_c_media"target="_blank" rel="noreferrer" title="See my resume">
                INSTAGRAM
            </a>
        </footer>
    )
}

export default Footer;
