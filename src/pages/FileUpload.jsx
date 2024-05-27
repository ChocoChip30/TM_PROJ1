import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
//const fs=require('fs');
var stream;
var labEmail = "kevinsylvesterpereira@gmail.com";


const FileUpload = ({ files, setFiles, removeFile }) => {
  /* const [countdown, setCountdown] = useState(15); */
  const timerId = useRef();
  const uploadFile= () => {
    // set status to uploading
    /* status.innerHTML = "uploading…"; */
    console.log("Trying to upload the file...")
    var file = document.getElementById('file');
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
                  'headers' : {
                      'content-type' : "application/octet-stream",
                      'content-length' : CHUNK.length,
                  },
                  'body': CHUNK
          })
          console.log("CHUNK NO"+chunk+" was sent")
      }
          /* status.innerHTML = 'uploaded!!!'; */
  }
};


  /* useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countdown == 0) {
      clearInterval(timerId.current);
      alert("End");
    }
  }, [countdown]); */
  // useEffect(() => {
  //   const x = setInterval(() => {
  //     setCountdown(countdown - 1);
  //     if (countdown === 0) {
  //       clearInterval(x);
  //     }
  //   }, 1000);
  // }, [countdown]);
  const sendFile = (event) => {
    fetch("http://localhost:19000/send", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : "*"},
    body: JSON.stringify({
      Email:labEmail
    })
  })
  .then((res)=>console.log(res))
  
  };
  return (
    <>
      <div
        className="file-card"
        style={{
          backgroundColor: "#ADD8E6",
          border: "3px dashed",
          padding: "1em",
          minHeight: "230px",
          minWidth: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="file-input"
          style={{
            position: "relative",
            marginBottom: "1.Sem",
          }}
        >
          <input
            type="file"
            id="file"
            style={{
              position: "relative",
              maxWidth: "200px",
              height: "46px",
              zIndex: "3",
              cursor: "pointer",
              opacity: "0",
            }}
            onChange={uploadFile}
          />

          <button
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FFA500",
            }}
          >
            <i>
              <FontAwesomeIcon icon="fa-plus" />
              Upload
            </i>
          </button>
        </div>
        <p className="main">Support</p>
        <p className="info">PDF,JPG,PNG</p>
      </div>
      <a>
        <button type="button" className="btn btn-dark" onClick={sendFile} >
          verify
        </button>
      </a>
    </>
  );
};

export default FileUpload;
