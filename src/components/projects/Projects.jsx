import React from 'react';
import styles from './Projects.module.css'
import Spot from '../../assets/images/spot-that-tune.PNG'
import Cook from '../../assets/images/whatscookn.PNG'
import Alchemy from '../../assets/images/alchemy.PNG'

export const Projects = () => {

    return(
        <div id='projects'className={styles.projects}>
            <h1 className={styles.heading}>PROJECTS</h1>
            <article className={styles.projectArticle}>
                <h3>SPOT THAT TUNE</h3>
                <div className={styles.article}>
                    <img src={Spot} className={styles.screenshot}alt='project screenshot'/>
                    <div className={styles.content}>
                        <p className={styles.projectDescription}>Web application using the Spotify Web API and Socket IO. Application was built in a one week sprint.</p>

                        <div className={styles.projectLinks}>
                        <a
                        className={styles.links}
                        href="https://github.com/SpotThatTune" target="_blank"
                        rel="noreferrer">
                        GITHUB LINK
                        </a>
                        <a
                        className={styles.links}
                        href="https://spot-that-tune.netlify.app/" 
                        target="_blank" 
                        rel="noreferrer">
                        DEPLOYED SITE
                        </a>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.projectArticle}>
                <h3>WHAT'S COOK'N</h3>
                <div className={styles.article}>
                    <img src={Cook} className={styles.screenshot}alt='project screenshot'/>
                    <div className={styles.content}>
                        <p className={styles.projectDescription}>Full stack meal planning application using the Spoontacular API. Application was built in a 4 day sprint.</p>
                        <p>Tech Used: REACT, NODE, CSS, Express, PostgreSQL</p>

                        <div className={styles.projectLinks}>
                        <a
                        className={styles.links}
                        href="https://github.com/Aluminum-Chefs" target="_blank"
                        rel="noreferrer">
                        GITHUB LINK
                        </a>
                        <a
                        className={styles.links}
                        href="https://whats-cookn.netlify.app/" 
                        target="_blank" 
                        rel="noreferrer">
                        DEPLOYED SITE
                        </a>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.projectArticle}>
                <h3>ALCHEMY NETWORKR</h3>
                <div className={styles.article}>
                    <img src={Alchemy} className={styles.screenshot}alt='project screenshot'/>
                    <div className={styles.content}>
                        <p className={styles.projectDescription}>Alchemy Networkr is a community of students and alumni of Alchemy Code Lab. Here users can post, view deployment, view source code and comment on past projects. </p>
                        <p>Tech Used: PUG JS, NODE, CSS, Express, PostgreSQL</p>

                        <div className={styles.projectLinks}>
                        <a
                        className={styles.links}
                        href="https://github.com/Alchemy-Networkr" target="_blank"
                        rel="noreferrer">
                        GITHUB LINK
                        </a>
                        <a
                        className={styles.links}
                        href="https://networkr-be.herokuapp.com/" 
                        target="_blank" 
                        rel="noreferrer">
                        DEPLOYED SITE
                        </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )

}

export default Projects;