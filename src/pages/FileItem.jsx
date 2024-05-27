import {
    faFileAlt,
    faspinner,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  
  const FileItem = ({ file, deleteFile }) => {
    return (
      <li
        className="list-item"
        key={file.name}
        style={{
          listStyle: "none",
          margin: "1.2em 0",
          backgroundColor: "  #FFA500",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          padding: "1.2em 1.5em",
        }}
      >
        <FontAwesomeIcon icon={faFileAlt} />
        <p style={{ flex: "1", fontSize: "0.9em" }}>{file.name}</p>
        <div
          className="actions"
          style={{ justifySelf: "flex-end", cursor: "pointer" }}
        >
          {file.isUploading && <FontAwesomeIcon className="fa-spin" />}
          {!file.isUploading && (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteFile(file.name)}
            />
          )}
        </div>
      </li>
    );
  };
  
  export default FileItem;
  