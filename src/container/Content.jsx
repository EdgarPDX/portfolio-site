import React from 'react';
import styles from './Content.module.css';
import AboutMe from '../components/about/AboutMe'
import Projects from '../components/projects/Projects'
import Gallery from '../components/slides/Gallery'
import Contact from '../components/contact/Contact';

export const Content = () => {
 
    return (
        <div className={styles.content}>
            <AboutMe />
            <Projects />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Content;