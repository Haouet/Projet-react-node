import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL = "https://backend-ecommerce-exw7.onrender.com/email";

function Contact() {
 
  const [email, setEmail] = useState('');  
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
 
  
  return (

    <div className='contact-form spad'>
    <div className='container'> 
    <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div> 
            <form action='#' >
      <div className="form-group">
       
        <input type="email" className="form-control" label="email" placeholder="Enter email" onChange={(e) => {
          setEmail(e.target.value)
        }} />

      </div>
      <div className="form-group">
       
        <input type="text" className="form-control" label="subject" placeholder="Enter subject" onChange={(e) => {
          setSubject(e.target.value)
        }} />

      </div>
      <div className="form-group">
      
        <textarea type="text" className="form-control" label="text" placeholder="Enter message" onChange={(e) => {
          setText(e.target.value)
        }} />

      </div>
      <div className="form-group">
      <button type="submit" className="primary-btn" onClick={async () => {

        const sendEmail = await axios.post(baseURL,{
         email,
         subject,
          text
        })
        console.log(sendEmail);      
        setMessage(sendEmail.msg)

        

      }}> Submit</button>
       <div>{message}</div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Contact
