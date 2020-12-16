import React from 'react';
import styles from './AboutMe.module.css';
import headShot from '../../assets/images/head-shot.jpg'

export const AboutMe = () => {
 
    return (
        <div className={styles.aboutMe}>
        <h1 className={styles.heading}>EDGAR CUELLAR</h1>
        <article className={styles.introduction}>
            <div className={styles.introductionContent}>
                <h3>WELCOME</h3>
                <p>
                    Full stack software developer with
                    a strong interest in the frontend.
                    Professional photographer and
                    troubleshooter. Passionate about
                    learning for the betterment of myself
                    and teamates. Looking to use
                    my skills to make life more enoyable
                    and fufilling.
                </p>  
            </div>
            <img className={styles.profilePhoto} src={headShot} alt='headshot'/>
                          
        </article>
        </div>
    )
}

export default AboutMe;