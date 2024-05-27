import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import OtpInput from 'react-otp-input';
import '../verification2.css'
import { useNavigate } from "react-router-dom";

const Verification2 = () => {
  const navigate=useNavigate();
  var [otp, setOtp]= useState("");
  const verifyOTP = async ()=>{
    console.log(otp);
    await fetch('http://localhost:19000/otpVerify',{
    method:"POST",
    credentials:"same-origin",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : "*"  
    },
    body: JSON.stringify({
      OTP:otp
    }),
    })
    .then((res) =>res.json())
    .then((data) => 
      {
        console.log("Received data is "+JSON.stringify(data));
        if(data.status=="verified")
        {
          alert("OTP verified!");
          navigate("/LabVerify");
        }

      }
    )
  }
  // var [otp2, setotp2]= useState("");
  // var [otp3, setotp3]= useState("");
  // var [otp4, setotp4]= useState("");

  // otp1.onkeyup= function() {
  //   if (this.value.length== parseInt(this.attributes["maxLength"].value)){
  //     otp2.focus();
  //   }
  // }
  // otp2.onkeyup= function() {
  //   if (this.value.length== parseInt(this.attributes["maxLength"].value)){
  //     otp3.focus();
  //   }
  // }

  // otp3.onkeyup= function() {
  //   if (this.value.length== parseInt(this.attributes["maxLength"].value)){
  //     otp4.focus();
  //   }
  // }

  

  // const buttonTest=()=>{
  //   console.log(otp1);
  //   console.log(otp2);
  //   console.log(otp3);
  //   console.log(otp4);
  // }
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

<div className='boxCard'>
<div className="container text-center">
  {/* <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div> */}
  <div className="row justify-content-center">
    <div className="col-4">
    <img className="veripic" src="veri.jpg" alt=""></img>
    </div>
    <div className="col-32">
    <div className='textveri'>
    OTP VERIFICATION
    </div>
    </div>
    <div class="col-33">
    <div className='textveri1'>
   OTP has been sent to the registered mobile number
    </div>
    </div>
    <div class="col-34">
        <div className='textveri2'>
        Enter OTP
        </div>
    </div>
    <div class="col-150">

    
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      maxLength={1}
      renderSeparator={<span>-</span>}
      renderInput={(maxLength) => <input {...maxLength} />}
    />
  
    {/* <input type="text"
    maxLength={1}
     className="otp1" 
     name="otp1" 
    // pattern="[0-9]{1}"
    required
    value={otp1}
    onChange={(event) => setotp1(event.target.value)}
     />
    <input type="text"
    maxLength={1} 
    className="otp1"
    name="otp2"  
    // pattern="[0-9]{1}" 
    required
    value={otp2}
    onChange={(event) => setotp2(event.target.value)}
    />
    <input type="text" 
    maxLength={1}
    className="otp1" 
    name="otp3"  
    // pattern="[0-9]{1}" 
    required
    value={otp3}
    onChange={(event) => setotp3(event.target.value)}/>

    <input type="text" 
    maxLength={1}
    className="otp1" 
    name="otp"  
    // pattern="[0-9]{1}" 
    required
    value={otp4}
    onChange={(event) => setotp4(event.target.value)}
    /> */}
    </div>
    
    <div class="col-36">
    <div className='button_otp'>
    <Button variant="primary" type="submit" className="btn-signIn">
    <a className="nav-link" onClick={verifyOTP}>Enter</a>
    </Button>
   
    </div>
    </div>
    <div class="col-37">
      
    </div>

    
  </div>


</div>

</div>
    </div>
  )
}

export default Verification2
