import React from 'react';
import styles from './Content.module.css';
import AboutMe from '../components/about/AboutMe'
import Projects from '../components/projects/Projects'

export const Content = () => {
 
    return (
        <div className={styles.content}>
            <AboutMe />
            <Projects />
        </div>
    )
}

export default Content;