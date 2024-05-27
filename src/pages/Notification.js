import React from 'react';
import "../Notification_c.css";
import logo from "../notification_logo.png"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";



import { useNavigate } from "react-router-dom";

const Notification = () => {
    const navigate=useNavigate();

  return (
    <div className='noti_Div'>
      {/* <Card className="noti_Card"> */}
      <div class="cardN">
  <div className='ImageN'><img src="notification_logo.png" className="card-imgN" alt="..."/> </div>
  <div class="card-body">
    <h5 class="card-titleN">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sorry !</h5>
    <p class="card-textN">Some documents are still not verified </p>
    <div className='buttonNN'><Button  href="/" class="btnN">back Home </Button></div>
  </div>

</div>
      {/* </Card> */}
    </div>
  )
}

export default Notification