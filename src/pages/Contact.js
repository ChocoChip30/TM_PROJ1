import React from 'react'
import Card from 'react-bootstrap/Card';
import '../ContactUs.css'
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const[firstName, setfirstName]= useState("");
  const[Email, setEmail]=useState("");
  const[Message, setMessage]=useState("");
  return (
    <div className='ContactUs'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <img className="logo" src="logo1.jpg" alt=""></img>
            </li>
            <li>
              <a className="navbar-brand" href="#">HealthMe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </li>
          </ul>
      
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">AboutUs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">LogIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Register">SignIn</a>
            </li>
          </ul>
        </div>
      </nav>


<section className='backforcontact'>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <img className="contact" src="contactus.png" alt=""></img>
    </div>
    <div class="col">
      <br></br>
      <div className='TextHeading'>Contact Us Form</div>
      <Form>
        
      <div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label1"><br></br><br></br>Lab Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="text" 
    className="form-control6" 
    placeholder="First name" 
    aria-label="First name"
    value={firstName}
    onChange={(event) => setfirstName(event.target.value)}
    />
    

  </div>
  
</div>
<br></br>

<div className="row">
  <div className="col"> 
  <label htmlfor="exampleFormControlInput1" className="form-label1">Email address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  <input
   type="email" 
   className="form-control5" 
   id="exampleFormControlInput1" 
   placeholder="name@example.com"
   value={Email}
   onChange={(event) => setEmail(event.target.value)}
   />
</div>
</div>
<div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label1"><br></br><br></br>Message&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="textarea" 
    className="form-control7" 
    placeholder="Enter your Message" 
    aria-label="message"
    value={Message}
    onChange={(event) => setMessage(event.target.value)}
    />
  </div> 
</div>
      </Form>
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>



</section>

<section>

</section>


      
    </div>



  )
}

export default Contact
