import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
 
    return (
        <div id='contact' className={styles.contactDiv}>
            <h1 className={styles.heading}>CONTACT ME</h1>
            <hr className={styles.line}></hr>
            <ul>
                <li>EMAIL: Edgarcpdx@gmail.com</li>
            </ul>
        
        </div>
    )
}

export default Contact;