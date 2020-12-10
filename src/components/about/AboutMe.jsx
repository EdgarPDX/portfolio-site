import React from 'react';
import styles from './AboutMe.module.css';
import headShot from '../../assets/images/head-shot.jpg'

export const AboutMe = () => {
 
    return (
        <>
        <h1 className={styles.heading}>EDGAR CUELLAR</h1>
        <article className={styles.introduction}>
            <img className={styles.AboutMe} src={headShot} alt='headshot'/>
            <div>
                <h3>WELCOME</h3>
            <p>My name is Edgar, I am a Software Engineer.</p>
            </div>
            
        </article>
        </>
    )
}

export default AboutMe;