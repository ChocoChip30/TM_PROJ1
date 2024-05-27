import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Aboutus.css"

const AboutUs = () => {
  return (
    <div className="AboutusP">
      <section>
        <div>
        <div class="container text-center">
  <div class="row">
    <div class="col align-self-center">
<h1 className='Text1A'>About HealthMe</h1>
    </div> 
  </div>
</div>
</div>
</section>

<section className='Section1'>
<div class="container text-center">
  <div class="row">
     <div class="col align-self-start">
   
    {/* <div class="col align-self-center"> */}
    <div className="text-left">
  
    <h1 className='Text2A'>
    <b className='HEADING'>LOOKING FOR A WEBSITE...<br></br></b>
    </h1>
    <ul className='TEXT2AA'>
    <li>To gain more customers ?</li>
    <li>To build their trust ?</li>
    <li>To find an easy way to start a new laboratory ?</li>
   <li>Need a quick way  ?</li><br></br>
    You're at the right place !!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </ul>
   
    {/* </div> */}
    </div> 
    
</div>
    <div class="col align-self-end">
    <img src="aboutus1.jpg" className="card-imgA" alt="..."/>
    </div>
  </div>
</div>
</section>
<section className='Section2'>
  <p>
  Our project is a secure and reliable medical document storage and verification application  using Blockchain technology called HealthMe.
   It will allow the users to have access to all  their medical records, anytime, anywhere. 
   It will include a document verification system  using blockchain, to ensure that the medical documents submitted by the patient are authentic. 
<br></br><br></br>
<ul>
<li> It  can get difficult to keep track of the ones we need at the moment.</li>
<li>  We can misplace them, </li> 
<li>damage them or not carry the correct documents when visiting the hospital,</li>
<li>  which can be a  hassle.</li>
  </ul><br></br>
   It is also inconvenient for most people to spend hours waiting to pick up test results  from a lab,
    or having to make multiple trips to pick them up and submit them to a medical  professional. 
    From a doctor’s perspective, ensuring that the documents received are authentic  is essential. 
    <br></br>
<br></br>
  </p>
  <div>
    <br></br>
    <br></br>
    <Button 
              variant="primary" 
              className="btn-signIn"
              href="/Home"
              >
                Back Home
              </Button>
    </div>
</section>

      <section>
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>HealthMe</Card.Title>
        <Card.Text>
          If your looking for a site
           to gain more customers 
           to build their trust 
           to find an easy and quick way to open your laboratory 
           You're at the right place !!

           we are gonna provide a secure way to store the patients results in one place and help you be more oragnised with all the records .
           we will help rigth from the inspection of your doucments to your first customer 
           All you need to do is register yourself and the rest follows .............. 
           

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
      </section>
      
    </div>
  )
}

export default AboutUs
