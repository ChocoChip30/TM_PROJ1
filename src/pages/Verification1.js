import React , {useState} from 'react'
import '../verification1.css';
import Button from "react-bootstrap/Button";



const Verification1 = () => {
  const[Number, setNumber]= useState("");
  const sendOTP = async ()=>{
    await fetch ("http://localhost:19000/otpGen", {
      method: "POST",
      credentials: "same-origin" ,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"  
      },
      body: JSON.stringify({
        ph_number:Number
      }),
    })
  }
  const buttonTest=()=>{
    console.log(Number);
  }
  return (
    
    <div>
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
    <a className="nav-link" href="#">Contact</a>
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
 
      <div class="container text-center">
  {/* <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div> */}
  <div class="row justify-content-center">
    <div class="col-4">
    <img className="veripic" src="veri.jpg" alt=""></img>
    </div>
    <div class="col-32">
    <div className='textveri'>
    OTP VERIFICATION
    </div>
    </div>
    <div class="col-33">
    <div className='textveri1'>
    We will send you an <b>One Time Password</b>
on this mobile number
    </div>
    </div>
    <div class="col-34">
        <div className='textveri2'>
        Enter Mobile Number
        </div>
    </div>
    <div class="col-33">
    
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Phone_No</span>
  <input type="tel" 
  class="form-control" 
  placeholder="Phone-No" 
  id="phone" 
  name="phone" 
  pattern="[0-9]{10}"
  required
  aria-label="Sizing example input"
  aria-describedby="inputGroup-sizing-default"
  value={Number}
  onChange={(event) => setNumber(event.target.value)}
   />
</div>
    </div>
    <div class="col-36">
    <div className='button_otp'>
    <Button variant="primary" type="submit" className="btn-signIn" onClick={() => {
      sendOTP();
      alert("OTP sent")}}>
    <a className="nav-link" href="/Verification2">Send OTP</a>
    </Button>
   
    </div>
    </div>
    <div class="col-37">
      
    </div>

    
  </div>


  {/* <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div> */}
</div>

    </div>
  )
}

export default Verification1
