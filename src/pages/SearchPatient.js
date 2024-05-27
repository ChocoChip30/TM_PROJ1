import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../SearchPatientt.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchPatient = () => {
  const [firstName, setfirstName] = useState('');
  const [Email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [data, setData] = useState([]);
  const [patient, setPatient] = useState('');
  const [pData, setPData] = useState('');

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    await fetch('http://localhost:19000/displayPatients', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log('All patients', response);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const selectedPatient = event.target.value;
    patientData(selectedPatient);
    setPatient(event.target.value);

  };

  const patientData = async (selectedPatient) => {
    console.log('Email is', patient);
    await fetch('http://localhost:19000/findPatient', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        Email: selectedPatient,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setPData(response);
        console.log('response is', JSON.stringify(response));
        setEmail(response.Email);
        setfirstName(response.Name);
        setphoneNumber(response.PhNo);
        console.log(response.Email, response.Name, response.PhNo);
      });
  };

  const buttonTest = () => {
    console.log(firstName, Email, phoneNumber);
  };


  

  return (

      









    <div className='Searchback'>
        <div>
        <div className='Searchback2'>
          
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <ul className="nav nav-pills">
      <li className="nav-item">
      <img className="logo" src="logo1.jpg" alt=""></img>
    
  </li>
  <li>
  <a className="navbar-brand" href="#">HEALTH_ME</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </li>
  
  </ul>
      
  <ul className="nav nav-pills">
      <li className="nav-item">
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="/Dashboard">Dashboard</a>
  </li> */}
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
     
      </div>
      </div>
      <section>
      <Card className='searchcard'>
      <Card.Title className='text1'></Card.Title>
     <Card className='searchcard2'>
     <Card.Img variant="top" src="" />
      <Card.Body>
        
      <div class="container text-center">
        <div class="row align-items-start">
    
    <div class="col">
   
    </div>
  </div>
      </div>

      <br></br>
      <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div className="input-group input-group-sm mb-3">
  <span className="input-group-text w-50 p-3" id="inputGroup-sizing-sm"><img className="icon" src="searchIcon.jpg" alt=""></img></span>
  <select value={patient} onChange={handleChange} >
    <option value="">Select an option</option>
      {data?.map(item => (
      <option key={item.Email} value={item.Email}>{item.Name}  {item.Email}  {item.PhNo}</option>
            ))} 
            </select >
  {/* <input type="text" className="form-control w-50 p-3" placeholder='search' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/> */}
</div>
    </div>
    
  </div>
</div>
<Card className='searchcard3'>
    <br></br>
    <Card.Body className='bodycard3'><img className="humanIcon2" src="IconHuman.jpg" alt=""></img>
    <br></br>
    <br></br>
    <Form className="DetailsForm" >
    <div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label4">Patient Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="text" 
    className="form-control1" 
    placeholder="First name" 
    aria-label="First name"
    value={firstName}
    />
    

  </div>
  
</div>

<br></br>
<div className="row">
  <div className="col"> 
  <label htmlfor="exampleFormControlInput1" className="form-label2">Email address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  <input
   type="email" 
   className="form-control2" 
   id="exampleFormControlInput1" 
   placeholder="name@example.com"
   value={Email}
   />
</div>
</div>

<br></br>
<div className="row">
  <div className="col">
  <label htmlfor="exampleFormControlInput1" className="form-label3">Phone-Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input 
    type="tel" 
    className="form-control3" 
    placeholder="Phone-No" 
    id="phone" 
    name="phone" 
    pattern="[0-9]{10}"
    value={phoneNumber}
    />
  </div>
  
</div>

 <br></br>
</Form>
<Button className='btnsendemail' variant="sendEmail">Send Email</Button>{''}
<br></br>
<br></br>

<Button className='btnupload' variant="sendEmail" onClick={()=>{console.log(patient); console.log(patient);}}>Upload Result</Button>{''}

</Card.Body>
</Card>
      </Card.Body>
     </Card>
    
      </Card>

      </section>
    </div>
  );
};

export default SearchPatient

