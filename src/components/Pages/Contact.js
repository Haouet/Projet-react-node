import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseURL = "http://localhost:5000/email";

function Contact() {
 
  const [email, setEmail] = useState('');  
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
 
  
  return (
    <div className='container'>      

      
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" label="email" placeholder="Enter email" onChange={(e) => {
          setEmail(e.target.value)
        }} />

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Subject</label>
        <input type="text" className="form-control" label="subject" placeholder="Enter subject" onChange={(e) => {
          setSubject(e.target.value)
        }} />

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Subject</label>
        <textarea type="text" className="form-control" label="text" placeholder="Enter message" onChange={(e) => {
          setText(e.target.value)
        }} />

      </div>
      <div className="form-group">
      <button type="submit" className="btn btn-primary" onClick={async () => {

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
    </div>
  )
}

export default Contact