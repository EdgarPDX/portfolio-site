import React from 'react';
import styles from './AboutMe.module.css';
import headShot from '../../assets/images/profile-pic.jpg'

export const AboutMe = () => {
 
    return (
        <div id='about-me' className={styles.aboutMe}>
        <article className={styles.introduction}>
            <div className={styles.introductionContent}>
            <h1 className={styles.heading}>EDGAR CUELLAR</h1>
                <p>Hey! My Name is Edgar Cuellar. I am full stack software developer with
                    a strong interest in the frontend. I come from a background in help desk and professional photography. I truly believe that the paths I've taken have brought me to my preffered tool of choice.. CODING!
                </p>
                <p>Coding to me is sandbox where I can create something out of nothing and have people not only be captivated but interact with my art.</p>
                <p>Take a look around at the projects I've worked on and some pictures I have taken. </p>
                     
                    
                  
            </div>
            <img className={styles.profilePhoto} src={headShot} alt='headshot'/>
                          
        </article>
        </div>
    )
}

export default AboutMe;