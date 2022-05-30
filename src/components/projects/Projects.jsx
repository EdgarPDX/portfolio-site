import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Project } from './Project';
import projects from '../../assets/Data/projects.js';
import { useHistory } from "react-router-dom";


export const Projects = () => {
    const history = useHistory();
    const [mouseClicks, setMouseClicks]= useState(0);
    const [clipPath, setClipPath] = useState({
        clipPath: "polygon(0%% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
    });

    const handleClick = async() => {
        
        await setClipPath(
            {clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%)"})
        
        
        await setTimeout(() => {
            setClipPath({
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)"
        })
          }, 1000);
          await setTimeout(() => {
            setMouseClicks(mouseClicks + 1)
          }, 1000);

          if(mouseClicks === 2) {
            history.push("/contact")
       }

    }

    return(
        <div id='projects'className={styles.projects}>
            <div className={styles.heading}>PROJECTS</div>
            <button onClick={handleClick}className={styles.nextButton}>Next</button>      
            <Project clipPath={clipPath} project={projects[mouseClicks]} />
        </div>
    )

}

export default Projects;