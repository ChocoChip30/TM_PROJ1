import React from 'react'
import { useState } from 'react';
import '../login1.css';
import Button from "react-bootstrap/Button";
import { Alert } from 'bootstrap';
import { useNavigate } from "react-router-dom";
import useContext  from 'react';
import { UserContext } from '../hooks/UserContext';


const Login = () => {
  const navigate=useNavigate();
  const[Email, setEmail]= useState("");
  const[Password, setPassword]=useState("");


  const  loginBackend = async ()=>{
    await fetch("http://localhost:19000/Lsignin", {
      method: "POST",
      credentials: "include" ,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"  
      },
      body: JSON.stringify({
        Email: Email,
        LPass: Password
      }),
    })
    

      .then((res) =>res.json())
      
      .then((data) => 
      {
        if(data=="Please add email or password")
        {
          alert("Please add email or password");
        }
        else if(data=="Invalid Credentials")
        {
          alert("Invalid Credentials");
        }
        else if(data=="Wrong Password")
        {
          alert("Wrong Password");
        }
        else
        {
          //props.navigation.navigate("Patientlogin");
          navigate("/Dashboard");
          console.log("Logged in successfully :)");
          
          console.log(data);
          UserContext.UserContext=data;
          console.log(UserContext.UserContext);
          localStorage.setItem('authBool', true);
          console.log(localStorage.authBool);
        }

        
      })
      .catch(error=>{
        console.error(error);
      });
      
      
};

  return (
    <div className='loginCard'>
    
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
           
            
          </ul>
        </div>
      </nav>
      <form className='formCard'>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input
       type="email" 
       className="form-control" 
       id="inputEmail3"
       value={Email}
       onChange={(event) => setEmail(event.target.value)}
       />
    </div>
  </div>
  <br></br>
  
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input 
      type="password" 
      className="form-control" 
      id="inputPassword3"
      value={Password}
      onChange={(event) => setPassword(event.target.value)}
      />
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="row mb-3">
    <div className="col-sm-10">
    <a className="nav-link"  href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account?</a>
    </div>
    </div>
    <br></br>
    <br></br>
    <div className='button-center'>
   
              <Button 
              variant="primary" 
              className="btn-signIn"
              onClick={()=>{loginBackend();}}
              >
                LogIn
              </Button>
              
            </div>

  </div>
  </form>
  </div>
  
  )
}
  
export default Login;