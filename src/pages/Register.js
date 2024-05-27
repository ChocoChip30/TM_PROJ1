import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Countdown from 'react-countdown';
import '../register.css'
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";




const Register = () => {
  const navigate = useNavigate();

  const[firstName, setfirstName]= useState("");
  const[Email, setEmail]=useState("");
  const[Password, setPassword]= useState("");
  const[confirmPassword, setconfirmPassword]=useState("");
  const[phoneNumber, setphoneNumber]=useState("");
  const[Address,setAddress]=useState("");
  const buttonTest=()=>{
    console.log(firstName,Email,Password,confirmPassword,phoneNumber,Address);

  }
  const  Sendtobackend = async () => {
    console.log("Attempting backend stuff :)");
     await fetch("http://localhost:19000/Lsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"            //I don't think this header actually does anything, that cors function over at index.js handles everything
      },
      body: JSON.stringify({
        LabName: firstName,
        LabEmail: Email,
        LabAddr:Address,
        LabPhNo: phoneNumber,
        LPass: Password,
        LCPass: confirmPassword,
      }),
    })
      .then((res) => res.json())
      
      .then((data) => {
        console.log(data);
        if(data=="Please fill in all the fields")
         {
          alert("Please fill in all the fields");
         }
         else if(data=="User already exists!")
         {
          alert("That email is already in use!!! Please log in or use another email");
         }
         else
         {
          <Alert severity="success">
  
  Details were successfully registered 
</Alert>
          //props.navigation.navigate("Patientlogin");
          localStorage.setItem('authBool', true);
          console.log("Registration was successful :)");
          navigate("/Verification1")
         }

        
      })
      .catch((error)=>{
        console.error(error);
        console.log(":((((");
      });
  };

  return (
    
    <div className="App1">
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
    <a className="nav-link" href="/Verification1">Verification</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/Contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">AboutUs</a>
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
<div className="formRegister">
  <div className="textR"><b>  REGISTRATION FORM </b></div>
    <Form className="RegisterForm" >
    <div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label">Lab Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="text" 
    className="form-control" 
    placeholder="First name" 
    aria-label="First name"
    value={firstName}
    onChange={(event) => setfirstName(event.target.value)}
    />
</div>
</div>
<br></br>

  <div className="mb-3">
  <label htmlfor="exampleFormControlInput1" className="form-label">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  <input
  type="email" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="name@example.com"
  value={Email}
  onChange={(event) => setEmail(event.target.value)}
  />
</div>

  <br></br>
  <div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;</label>
    <input 
    type="password" 
    className="form-control" 
    placeholder="Password" 
    value={Password}
    onChange={(event) => setPassword(event.target.value)}
    />
  </div>
  
</div>
<br></br>
<div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label">Confirm Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="password" 
    className="form-control" 
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(event) => setconfirmPassword(event.target.value)}
    />
  </div>
  
</div>
<br></br>
<div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label">Phone-Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="tel" 
    className="form-control" 
    placeholder="Phone-No" 
    id="phone" 
    name="phone" 
    pattern="[0-9]{10}"
    value={phoneNumber}
    onChange={(event) => setphoneNumber(event.target.value)}
    />
  </div>
  
</div>
<br></br>
 
<div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label">Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="text" 
    className="form-control" 
    placeholder="Address"
    value={Address}
    onChange={(event) => setAddress(event.target.value)}
    />
  </div>
  
</div>
 <br></br>



      {/* <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridLabName">
          <Form.Label>Lab Name</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="ConfirmPassword" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button 
      variant="primary" 
      //type="submit" 
      className="btn-signInR"
      onClick={()=>{
        Sendtobackend();
        console.log("Button was pressed!");
      }
      }
       
      >
      <div className="TextR1">Register</div>
      
      </Button>
      {/* <Button
      onClick={()=>buttonTest()}
      >
        Test
      </Button> */}
    </Form>
    </div>
    </div>
  );
};

export default Register;
