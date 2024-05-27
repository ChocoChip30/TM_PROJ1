import React from 'react'
import Card from 'react-bootstrap/Card'
import '../Dashboardd.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  console.log("localStorage.authBool value in Dashboard "+localStorage.authBool);
  const logout= async(req,res)=>{
  await fetch('http://localhost:19000/logout',{
  'method':'POST',
  credentials: "include" ,
  
  headers:{
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*" ,
    
  }
  })
  console.log("Attempting to logout");
  localStorage.setItem('authBool', false);
  console.log("localStorage value inside logout function "+localStorage.authBool)
}

  return (
    <div className='Dashboardboard'>
      <nav className='Navbar'>
        <div className='verticalNav'>
          <ul class="nav flex-column">
            <li class="nav-item">
              <img className="logod" src="logo1.jpg" alt=""></img>
            </li>
            <li class="nav-item">
              <a className="navbar-brand" href="#">HEALTH_ME</a>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            
            
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
            <br></br>
            <li class="nav-item">
              <a className="nav-link" href="#">AboutUs</a>
            </li>
            <br></br>
            <li class="nav-item">
              <a className="nav-link" href="/Docs">View Documents</a>
            </li>
            <br></br>
            <li class="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={logout}>  <Button variant="warning">Log Out</Button>
              </a>

            </li>
          </ul>
        </div>
      </nav>
      <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col-6 col-sm-4">
            <Card style={{ width: '100rem' }} className='CARD1'>

              <div class="container text-center">
                <div class="row align-items-start">
                  <div class="col">
                    <Card.Img className="searchPatient" variant="top" src="searchPatient1.png" />
                  </div>
                  <div class="col">
                    <Card.Body>
                      <Card.Title>Search Patient</Card.Title>
                      <Card.Text>
                        To search a patients details to upload test result or send email
                      </Card.Text>
                      <Button variant="primary" className='btndash1' href='/SearchPatient'>click here</Button>
                    </Card.Body>
                  </div>
                  <div class="col">

                  </div>
                </div>
              </div>
            </Card>    <br></br>  </div>

        </div>
        <div class="row">
          <div class="col-6 col-sm-4">
            <Card style={{ width: '100rem' }} className='CARD1'>

              <div class="container text-center">
                <div class="row align-items-start">
                  <div class="col">
                    <Card.Img variant="top" className='uploadPic' src="searchPatient1.png" />
                  </div>
                  <div class="col">
                    <Card.Body>
                      <Card.Title>Upload Documents</Card.Title>
                      <Card.Text>
                        Upload Patient's Documents
                      </Card.Text>
                      <Button variant="primary" className='btndash1' href='/Upload'>Upload</Button>
                    </Card.Body>
                    {/* <input type="file" id="file" ref={hiddenFileInput} style={{display: 'none'}} onChange={()=>{
                              uploadFile();
                              
                              
                              }}></input> */}
                  </div>
                  <div class="col">

                  </div>
                </div>
              </div>
            </Card>    <br></br>  </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard
