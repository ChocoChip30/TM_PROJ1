import React from "react";
import FileItem from "../pages/FileItem";
const FileList = ({ files, removefile }) => {
  //   const deleteFileHandler = (_name) => {
  //     axios
  //       .delete("http://")
  //       .then((res) => removeFile(_name))
  //       .catch((err) => console.error(err));
  //   };
  return (
    <ul className="file-list">
      {/* {files &&
        files.map((f) => (
          <FileItem key={f.name} file={f} deleteFiles={deleteFileHandler} />
        ))} */}
    </ul>
  );
};

export default FileList;
