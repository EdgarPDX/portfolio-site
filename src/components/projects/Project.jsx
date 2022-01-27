import React from 'react';
import styles from './Projects.module.css';

export const Project = ({project, clipPath}) => {

    return(
            <div style={clipPath} className={styles.projectArticle}>
                <div className={styles.screenshot_container}>
                    <img className={styles.screenshot} variant="top" src={project.project_image} alt="project-screenshot" />
                </div>            
                
                <div className={styles.content}>
                    <h2>
                    {project.project_title}
                    </h2>
                    <p>
                        {project.project_summary}
                    </p>
                    <div className={styles.projectLinks}>
                        <a
                            href={project.project_github} 
                            target="_blank"
                            rel="noreferrer"
                            title="See the code">GITHUB
                        </a>
                        <a 
                            href={project.project_deployed_site} 
                            target="_blank" 
                            rel="noreferrer"
                            title="See it working">DEPLOYED SITE
                            
                        </a>
                    </div>
                        
                </div>
                 
            </div>
          
                        

    )

}