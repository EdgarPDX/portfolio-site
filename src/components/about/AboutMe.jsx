import React, { useState } from 'react';
import styles from './AboutMe.module.css';
import headShot from '../../assets/images/profile-pic.png'
import { useHistory } from "react-router-dom";

export const AboutMe = () => {
const history = useHistory();
const [mouseClicks, setMouseClicks]= useState(0);
const [clipPath, setClipPath] = useState({
    clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
});
const [aboutMeClip, setAboutMeClip] = useState({
    clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%)"});

const handleClick = async() => {
    
    await setClipPath(
        {clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%)"})
    
    
    await setTimeout(() => {
        setClipPath({
        clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
    })
      }, 1000);

    await setTimeout(() => {
        setAboutMeClip({
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)"
    })
      }, 1500);
    await setTimeout(() => {
        setMouseClicks( mouseClicks + 1)
      }, 1000);
    
   if(mouseClicks === 1) {
        history.push("/projects")
   }
    
};


    return (
        
           <div className={styles.aboutMe}>
                <div className={styles.img_heading}>
                    
                    {mouseClicks === 1? <div style={aboutMeClip} className={styles.aboutMeMessage}>
                        <h2 className={styles.welcomeHeading}>WELCOME..</h2>
                        <p className={styles.welcomeMessage}>
                        I have many skills and lots of useless knowledge, but I am passionate about helping people. Working on projects that have real world impact is my
                        motivation. With a background in IT and Photography, I've found a way to mix both by creating beautiful frontends. Click "continue" to look at some projects I've worked on or look at my resume, talent passport, linkedIn, Instagram, Github on the left!
                        </p>
                        <p className={styles.welcomeMessage}>
                        Skills: REACT JS, HTML, CSS, NODE JS, PUG, GIT, FireBase, Figma, Adobe Suite.  
                        </p>
                        <button onClick={handleClick}className={styles.nextButton2}>{mouseClicks === 1?"continue":"click"}</button>
                    </div>:<><div className={styles.heading_intro}>
                        <h1 className={styles.heading}>
                        EDGAR CUELLAR
                        </h1>
                        <h1 className={styles.heading2}>
                        Fullstack Software Engineer
                        </h1>
                        <button onClick={handleClick}className={styles.nextButton}>{mouseClicks === 1?"continue":"click"}</button>
                    </div><img className={styles.profilePhoto} style={clipPath}src={headShot} alt='headshot'/></>}
                </div>
            </div>
            
        
        
    )
}

export default AboutMe;