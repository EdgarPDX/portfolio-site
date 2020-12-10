import React from 'react';
import styles from './Content.module.css';
import AboutMe from '../components/about/AboutMe'

export const Content = () => {
 
    return (
        <div className={styles.content}>
            <AboutMe />
        </div>
    )
}

export default Content;