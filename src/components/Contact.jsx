import React  from 'react'
// import emailjs from '@emailjs/browser';
import '../style/Contact.css'

function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_hu7w363', 'template_a2ff4eb', form.current, 'CfOrMmS_-3xan4S9E')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  //   };

  return (
    <div className='contact--container' id='contact--container'>
      <h2 className="contact--heading">Have a question or want to work together?</h2>
      <form className='contact--form'>
        <label htmlFor="user_name" className='form--label'>Name</label>
        <input className='form--input' type="text" name='user_name' required/>
        <label htmlFor="user_email" className='form--label'>E-mail</label>
        <input className='form--input' type="text" name='user_email' required/>
        <label htmlFor="message" className='form--label'>Additional details</label>
        <textarea name="message" id=""  rows="15" className='contact--textarea'></textarea>
        <button className='contact--button' type='submit' >SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact
