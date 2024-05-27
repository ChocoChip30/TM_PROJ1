
import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import logo from '../logo.png';
import success_logo from '../tick.png';
import error_logo from '../error.png';
import "../Alert.css";

const Verify = ({state}) => {

    const [selectedFile, setSelectedFile ] = useState([]);
    const [isSuccess, setSuccess] = React.useState(false);
    const [isError, setError] = React.useState(false);

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

    
    const onchange = (event) => {
        setSelectedFile(event.target.files);
        console.log("SELECTED FILE: ", event.target.files[0]);
    }

    const verify = async(event) => {
        event.preventDefault();
        const { contract } = state;
        //const name = document.querySelector('#name').value;
        const id = document.querySelector('#id_doc').value;
        //const docname = document.querySelector('#docname').value;
        //const labname = document.querySelector('#labname').value;

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

        const verified = await contract.checkDocument(pass_selectedFile, id);
        if(verified){
            console.log("DOCUMENT IS AUTHENTIC - Verify.js")
            //alert("DOCUMENT IS AUTHENTIC - Verify.js")
            openPopup();
        }else{
            console.log("DOCUMENT IS FRAUDULENT - Verify.js")
            //alert("DOCUMENT IS FRAUDULENT - Verify.js")
            openError();
        }
    }

    return <>

<div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src={logo} />
        <h2>HealthMe</h2>
      </div>
      <header>

    <br></br>
    <form onSubmit={verify}>
        <h4>VERIFY DOCUMENTS</h4>
        <div>
            <div class="form-group">
                <label>Patient Id:</label>
                <input class="form-control" type="text" id="id_doc" placeholder="Enter Patient's ID: "></input>
                <br></br>
            </div>
            <div class="form-group">
                <input onChange={onchange}  class="form-control-file"  type="file" id="file" placeholder="Choose a file" />
                <br></br>
            </div>
           
        </div>
        <button class="btn btn-primary" type="submit">Verify</button>
        <div className={`popup ${isSuccess ? "open-popup " : ""}`} >
            <img className={"popup-img"} src={success_logo} alt="success"></img>
                <h2 className={"popup-h2"}>
                    Authentic Document
                </h2>
                <button className={"popup-button"}type="button" onClick={closePopup}>OK</button>
        </div>
        <div className={`popup ${isError ? "open-popup " : ""}`} >
            <img className={"popup-img"} src={error_logo} alt="fraud"></img>
                <h2 className={"popup-h2"}>
                    Fraudulent Document
                </h2>
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

export default Verify;