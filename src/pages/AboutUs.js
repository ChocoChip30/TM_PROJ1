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
<h1 className='Text1A'>About Health_Me</h1>
    </div> 
  </div>
</div>
</div>
</section>

<section>
<div class="container text-center">
  <div class="row">
    {/* <div class="col align-self-start">
    </div> */}
    <div class="col align-self-center">
    <h4 className='Text2A'>
    If your looking for a site<br></br>
    to gain more customers <br></br>
    to build their trust <br></br>
    to find an easy and <br></br>
    quick way to open your laboratory <br></br>
    You're at the right place !!
    </h4>
    </div>
    <div class="col align-self-end">
    <img src="aboutus1.jpg" className="card-imgA" alt="..."/>
    </div>
    <div>
    <Button 
              variant="primary" 
              className="btn-signIn"
              href="/Home"
              >
                Back Home
              </Button>
    </div>
  </div>
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
