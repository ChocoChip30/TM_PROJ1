import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import '../FileUpload_c.css';
var labEmail = "kevinsylvesterpereira@gmail.com";


const FileUploading = ({ files, setFiles, removeFile }) => {

/* const [countdown, setCountdown] = useState(15); */
 const uploadFile= () => {

  console.log("Trying to upload the file...")
  var file = document.getElementById("inputGroupFile02");
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file.files[0]);


  fileReader.onload = async (event) => {

    const content = event.target.result;
    const CHUNK_SIZE = 1000;
    const totalChunks = event.target.result.byteLength / CHUNK_SIZE;

    // generate a file name
    const fileName = file.files[0].name;
    console.log(fileName)

    for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
        let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)
        console.log("uploading CHUNK NO."+chunk);

        await fetch('http://localhost:19000/upload?fileName=' + fileName, {
                'method' : 'POST',
                credentials: "include" ,
                'headers' : {
                    'content-type' : "application/octet-stream",
                    'content-length' : CHUNK.length,
                },
                'body': CHUNK
        })
        console.log("CHUNK NO"+chunk+" was sent")
    }
    sendFile();

}
}
uploadFile();
const sendFile = (event) => {
  fetch("http://localhost:19000/send", {
  method: "POST",
  credentials: "include" ,
  headers:{
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*"},
  body: JSON.stringify({
    Email:labEmail
  })
})
.then((res)=>{console.log(res);
}

)
}
}

export default class FileUpload extends PureComponent {
  render() {

    return (

      <div>
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
    <a className="nav-link" href="/Contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">AboutUs</a>
  </li>
      
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">LogOut</a>
  </li>
  
  </ul>
    </div>
</nav>
        <div className="container-lg">
            <br></br>
        <Container>
      <Row>
        <Col className="box1">
            <div className='Text1'>UPLOAD YOUR FILES HERE<br></br><br></br> </div>
            <br></br>

            <div className='box2'>
            <div className="input-group mb-3">
            {/* <label className="input-group-text" for="inputGroupFile02"></label> */}
           <input multiple="true" type="file"  className="form-control" id="inputGroupFile02"/>

  </div>
<br></br><br></br>
            <div >
            <Button 
              // variant="primary" 
              className="button1"
              onClick={FileUploading}
              type="submit"
              >
              <b>Upload</b>  
              </Button>
            </div>
</div>
            
        </Col>
        
      </Row>
    </Container>
        
        </div>

      </div>
    )
  }
}