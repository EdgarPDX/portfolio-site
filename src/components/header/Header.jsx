import React from 'react';
import styles from './Header.module.css';
import {Spring} from 'react-spring/renderprops'

export const Header = () => {
 
    return (
        <header className={styles.headerComponent}>
            <Spring
            from={{ opacity: 0, marginRight:-500}}
            to={{ opacity: 1, marginRight: 0 }}
            config={{duration:1500}}
            >
                {props => <div style={props} className={styles.allLinks}>
                <a href='#about-me'className={styles.link}>ABOUT ME</a>
                <a href='#projects' className={styles.link}>PROJECTS</a>
                <a href='#gallery'className={styles.link}>GALLERY</a>
                <a href='#contact'className={styles.link}>CONTACT ME</a>
            </div>}
            </Spring>
            
            
        </header>
    )
}

export default Header;
