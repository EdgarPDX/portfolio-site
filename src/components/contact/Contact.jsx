import React from 'react';
import styles from './Contact.module.css';
// import Resume from '../../assets/images/EdgarCuellar.pdf'
import emailjs from 'emailjs-com';

export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'gmail_email', e.target, 'user_RrUh6iMpWCOd14APEOdnM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
 
    return (
        <>
            <h1 className={styles.heading}>CONTACT ME</h1>
            <hr className={styles.line}></hr>
        

        <form className={styles.contact_form} onSubmit={sendEmail}>
            <div className={styles.first_inputs}>
                <label className={styles.labels}>NAME: </label>
                    <input className={styles.inputs} type="text" name="name" />
                <label className={styles.labels}>SUBJECT: </label>
                    <input className={styles.inputs} type="text" name="subject" />
                <label className={styles.labels}>EMAIL: </label>
                    <input className={styles.inputs}  type="email" name="contact_email" />
            </div>
            <label className={styles.labels}>MESSAGE: </label>
                <textarea className={styles.message} name="message"/>
            <input className={styles.submit} type="submit" value="Send" />
    </form>
        </>
    )
}

export default Contact;