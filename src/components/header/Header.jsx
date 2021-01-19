import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

export const Header = () => {
 
    return (
        <header className={styles.headerComponent}>
            <div className={styles.allLinks}>
                <a href='#about-me'className={styles.link}>ABOUT ME</a>
                <a href='#projects' className={styles.link}>PROJECTS</a>
                <a href='#resume' className={styles.link}>RESUME</a>
                <a href='#gallery'className={styles.link}>GALLERY</a>
                <a href='#contact'className={styles.link}>CONTACT ME</a>
            </div>
                <img className={styles.logo}src={logo} alt='logo'/>
            
        </header>
    )
}

export default Header;
