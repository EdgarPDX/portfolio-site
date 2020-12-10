import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';

export const Header = () => {
 
    return (
        <header className={styles.headerComponent}>
            <div className={styles.allLinks}>
                <img className={styles.logo}src={logo} alt='logo'/>
                <button className={styles.link}>ABOUT ME</button>
                <button className={styles.link}>PROJECTS</button>
                <button className={styles.link}>RESUME</button>
                <button className={styles.link}>GALLERY</button>

            </div>
            <div className={styles.contactLinks}>
                <a href="https://github.com/edgarpdx"target="_blank" rel="noreferrer">
                    <img className={styles.outsideLink} src={github} alt='github link'/>
                </a>
                <a href="https://www.linkedin.com/in/edgarpdx/"target="_blank" rel="noreferrer">
                    <img className={styles.outsideLink} src={linkedIn} alt='linkedin link'/>
                </a>
            </div>
            
        </header>
    )
}

export default Header;
