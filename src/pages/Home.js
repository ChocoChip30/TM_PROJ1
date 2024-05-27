import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();

  return (
    
        <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <ul className="nav nav-pills">
      <li className="nav-item">
      <img className="logo" src="logo1.jpg" alt=""></img>
    
  </li>
  <li>
  <a className="navbar-brand" href="#">HEALTH_ME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </li>
  
  </ul>
      
  <ul className="nav nav-pills">
     
  {/* <li className="nav-item">
    <a className="nav-link" href="/FileUpload">FileUpload</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Notification">Notification</a>
  </li> */}

  {/* <li className="nav-item">
    <a className="nav-link" href="/FileUpload">FileUpload</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Notification">Notification</a>
  </li> */}
  <li className="nav-item">
    <a className="nav-link" href="/Verify">VERIFY DOCUMENTS</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="/Contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/AboutUs">AboutUs</a>
  </li>
      <li className="nav-item">
    <a className="nav-link" href="/Login">Log In</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/Register">Sign Up</a>
  </li>
  
  </ul>
    </div>
</nav>

      <header className="App-header">
      <div class="row align-items-center">
    
    <div class="col">
      <div>
    
   <b className='text1main'>
   <Card className='HomeCard'>
      <Card.Header className='HomeText1'>Secure and Reliable Medical Document Storage and Verification</Card.Header>
      <Card.Body>
        <Card.Title className='cardtext2'>Store all Your documents securely with HealthMe</Card.Title>
        <Card.Text className='cardtext'>
          The first application to access all your medical documents, 
          anywhere & anytime
        </Card.Text >
        <Button className="BTN-HOME" variant="primary" onClick={()=>{navigate("/Register");;}}
>Register

        {/* navigate("/Notification"); */}

        </Button>
      </Card.Body>
    </Card>
    </b>
   
   </div>
    </div>
    {/* <div class="col">
      One of three columns
    </div> */}

    <div class="col">
    <img src="LOGOLABBBB.png" className="main_img" alt=""></img>
    </div>
  </div>
  </header>
    </div>
  )
}

export default Home
