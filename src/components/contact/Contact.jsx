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
        <div className={styles.contactContainer}>
            <div className={styles.heading}>CONTACT ME</div>
            <form id='contact'className={styles.contact_form} onSubmit={sendEmail}>
                <div className={styles.first_inputs}>
                    <input className={styles.inputs} type="text" name="name" placeholder='Name..'/>
                    <input className={styles.inputs} type="text" name="subject" placeholder='Subject..'/>
                    <input className={styles.inputs}  type="email" name="contact_email" placeholder='Email..'/>
                </div>
                    
                    <textarea className={styles.message} name="message" placeholder='Your message...'/>
                    <input className={styles.submit} type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;