import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';
import '../style/Contact.css'

function Contact() {
  const form = useRef();
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1oe9mqd', 'template_ejci9uj', form.current, 'CfOrMmS_-3xan4S9E')
      .then((result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true); // Show success message
          setTimeout(() => {
            setIsSuccessMessageVisible(false); // Hide success message after a few seconds
        }, 3000);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

  return (
    <div className='contact--container' id='contact--container'>
      <h2 className="contact--heading">Have a question or want to work together?</h2>
      <form className='contact--form' ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name" className='form--label'>Name</label>
        <input className='form--input' type="text" name='user_name' required/>
        <label htmlFor="user_email" className='form--label'>E-mail</label>
        <input className='form--input' type="text" name='user_email' required/>
        <label htmlFor="message" className='form--label'>Additional details</label>
        <textarea name="message" id=""  rows="15" className='contact--textarea'></textarea>
        <button className='contact--button' type='submit' >SUBMIT</button>
      </form>
      {isSuccessMessageVisible && (
        <div className='success-message'>Message has been sent successfully!</div>
      )}
    </div>
  )
}

export default Contact
