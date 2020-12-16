import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

export const Header = () => {
 
    return (
        <header className={styles.headerComponent}>
            <div className={styles.allLinks}>
                <span className={styles.link}>ABOUT ME</span>
                <span className={styles.link}>PROJECTS</span>
                <span className={styles.link}>RESUME</span>
                <span className={styles.link}>GALLERY</span>
            </div>
                <img className={styles.logo}src={logo} alt='logo'/>
            
        </header>
    )
}

export default Header;
