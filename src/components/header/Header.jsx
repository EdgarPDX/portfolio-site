import React from 'react';
import styles from './Header.module.css';

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
            
        </header>
    )
}

export default Header;
