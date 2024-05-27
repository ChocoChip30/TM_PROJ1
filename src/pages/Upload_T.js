
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';
import logo from '../logo.png';
import success_logo from '../tick.png';
import error_logo from '../error.png';
import "../Alert.css";
import axios from "axios";

var patientEmail = "example@gmail.com";
var fileName;

const Upload = ({state}) => {
  const [data, setData] = useState([]);
  const [patient, setPatient] = useState('');

  useEffect(() => {
    console.log("Inside the useEffect")
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


    const [selectedFile, setSelectedFile ] = useState([]);
    const [isSuccess, setSuccess] = React.useState(false);
    const [isError, setError] = React.useState(false);
    
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
          console.log('response is', JSON.stringify(response));
          
          console.log(response.Email, response.Name, response.PhNo);
          let nameTextField=document.getElementById("name");
          let patientIDTextField=document.getElementById("id");
          let patientEmail=document.getElementById("email");
          nameTextField.value=response.Name;
          patientIDTextField.value=response.patientId;
          patientEmail.value=response.Email;

        
        });
    };


    const onchange = (event) => {
        setSelectedFile(event.target.files);
        console.log("SELECTED FILE: ", event.target.files[0]);
    }

    const openPopup = () => {
        setSuccess(true);
    }

    const openError = () => {
        setError(true);
    }

    const closePopup = () => {
        setSuccess(false);
        setError(false);
    }


    const upload = async(event) => {
      console.log("Attempting to upload the file");
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector('#name').value;
        const id = document.querySelector('#id').value;
        const docname = document.querySelector('#docname').value;
        const labname = document.querySelector('#labname').value;

        console.log("selected file: ", selectedFile);
        console.log("type of selected file: ", typeof selectedFile);
        console.log("-------------------------------------------------------");

        const filename = selectedFile[0].name;
        const file_lastModified = selectedFile[0].lastModified.toString();
        const file_lastModifiedDate = selectedFile[0].lastModifiedDate.toString();
        const file_size = selectedFile[0].size.toString();
        const file_type = selectedFile[0].type;
        const file_webKitRelativePath = selectedFile[0].webkitRelativePath;

        const pass_selectedFile = filename + file_lastModified + file_lastModifiedDate + file_size + file_type + file_webKitRelativePath
        console.log("pass selected file: ", pass_selectedFile);
        console.log(contract);

        try{
            const transaction = await contract.addDocument(name, id, docname, labname, pass_selectedFile);
            await transaction.wait();
            console.log("Transaction Complete - Upload.js");
            fileName=filename;
            uploadFile();
            //alert("UPLOAD SUCESS!!!");
            openPopup();
            
            

        }
        catch(err){
            openError();
        }

    }
    const uploadFile = async () => {
        console.log("Trying to upload the file...")
        var file = selectedFile[0];
        let form = document.getElementById ('form');
        let formData = new FormData (form);
        formData.append('selectedFile', file)
        console.log("Form submitted");
        axios.post ('http://localhost:19000/upload', formData)
        .then((data)=>{
          console.log(data);
          if (data.status==200)
          {
            console.log("Moving to AWS code");
            sendAmazonS3();
          }
          else
          {
            console.log("Upload Failed!");
          }




        })
        /* const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(selectedFile[0]);
    
    
        fileReader.onload = async (event) => {
    
          const content = event.target.result;
          const CHUNK_SIZE = 1000;
          const totalChunks = event.target.result.byteLength / CHUNK_SIZE;
    
          fileName= selectedFile[0].name;
          console.log(fileName)
  
          for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
            let CHUNK = content.slice(chunk * CHUNK_SIZE, (chunk + 1) * CHUNK_SIZE)
            console.log("uploading CHUNK NO." + chunk);
    
            await fetch('http://localhost:19000/upload?fileName=' + fileName, {
              'method': 'POST',
              credentials: "include" ,
              'headers': {
                'content-type': "application/octet-stream",
                'content-length': CHUNK.length,
              },
              'body': CHUNK
            })
            console.log("CHUNK NO" + chunk + " was sent")
          }
          console.log("Moving to AWS code");
          sendAmazonS3();
        } */
        
     };

     const sendAmazonS3 = async () => {
      patientEmail = document.querySelector('#email').value;
      console.log(patientEmail);
        await fetch('http://localhost:19000/amazonUpload', {
    
          'method': 'POST',
          credentials: "include" ,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            azEmail: patientEmail,
            FileName:fileName
          }),
    
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
            console.log(":((((");
          });
    
      }

      const [firstName, setFirstName] = useState("");
    const [patientId, setPatientId] = useState("");

    
    return <>


<div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src={logo} alt="logo" />
        <h2>HealthMe</h2>
      </div>
      <header>
      <form >
        <h4>UPLOAD DOCUMENTS</h4>
        <div>
 

    <div class="form-group">
      <label>Search Patient</label>
  <select value={patient} onChange={handleChange} >
    <option value="">Select an option</option>
      {data?.map(item => (
      <option key={item.Email} value={item.Email}>Name: {item.Name},  Email: {item.Email} </option>
            ))} 
            
  </select >
  
</div>



<form
encType="multipart/form-data"
id="form"
>
            <div class="form-group">
                <label>Patient Name:</label>
                <input type="text"  class="form-control" id="name" placeholder="Enter Name"></input>
                <br></br>
            </div>
            <div class="form-group">
                <label>Patient Id:</label>
                <input type="text"  class="form-control" id="id" placeholder="Enter ID"></input>
                <br></br>
            </div>
            <div className="form-group">
                <label>Patient Email Id:</label>
                <input type="text" className="form-control" id="email" placeholder="Enter Email Id"></input>
                <br></br>
            </div>
            <div class="form-group">
                <label>Document Name:</label>
                <input type="text" class="form-control" id="docname" placeholder="Enter Document Name"></input>
                <br></br>
            </div>
            <div class="form-group">
                <label>Lab Name:</label>
                <input type="text" class="form-control" id="labname" placeholder="Enter Lab Name"></input>
                <br></br>
            </div>
            <div class="form-group">
                <input onChange={onchange}  class="form-control-file" type="file" id="file" placeholder="Choose a file" />
                <br></br>
            </div>  
            </form>
        </div>
        
        <button class="btn btn-primary"  onClick={upload}>Upload</button>
        <div className={`popup ${isSuccess ? "open-popup " : ""}`} >
            <img className={"popup-img"} src={success_logo} alt="success"></img>
                <h2 className={"popup-h2"}>
                    Upload Success
                </h2>
                <button className={"popup-button"}type="button" onClick={closePopup}>OK</button>
        </div>
        <div className={`popup ${isError ? "open-popup " : ""}`} >
            <img className={"popup-img"} src={error_logo} alt="failed"></img>
                <h2 className={"popup-h2"}>
                    Upload Failed
                </h2>
                <br></br>
    
                <button className={"popup-button"}type="button" onClick={closePopup}>OK</button>
        </div>
    </form>
    <br></br>
    <br></br>
    <br></br>
      </header>
      
    </div>
    
    </>
}

export default Upload;