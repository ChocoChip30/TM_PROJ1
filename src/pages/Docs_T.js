import { useState, useEffect } from "react";
import logo from '../logo.png';

const Docs = ({ state }) => {
  const [docs, setDocs] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const getDocs = async () => {
      const docs = await contract.getDocuments();
      setDocs(docs);
    };
    contract && getDocs();
  }, [contract]);

  return (
    <>
      <div class="container">
        <div class="py-5 text-center">
          <img class="d-block mx-auto mb-4" src={logo} />
          <h2>HealthMe</h2>
        </div>
        <header>
        <p style={{ textAlign: "center", marginTop: "20px" }}>UPLOADED DOCUMENTS</p>

<div
  className="container-fluid"
  style={{ width: "100%" }}
  key={Math.random()}
>
  <table
    style={{
      marginBottom: "10px",
    }}
  >
    <tbody>
      <tr>
        <th style={{
          backgroundColor: "#569696",
          border: "1px solid white",
          borderCollapse: "collapse",
          padding: "7px",
          width: "100px",
        }}>PATIENT ID</th>
        <th style={{
          backgroundColor: "#569696",
          border: "1px solid white",
          borderCollapse: "collapse",
          padding: "7px",
          width: "100px",
        }}>PATIENT NAME</th>
        <th style={{
          backgroundColor: "#569696",
          border: "1px solid white",
          borderCollapse: "collapse",
          padding: "7px",
          width: "100px",
        }}>DOCUMENT NAME</th>
        <th style={{
          backgroundColor: "#569696",
          border: "1px solid white",
          borderCollapse: "collapse",
          padding: "7px",
          width: "100px",
        }}>LAB NAME</th>
        <th style={{
          backgroundColor: "#569696",
          border: "1px solid white",
          borderCollapse: "collapse",
          padding: "7px",
          width: "100px",
        }}>DATE TIME</th>
      </tr>
      {docs.map((doc) => {
        return (
          <tr>
            <td
              style={{
                backgroundColor: "#96D4D4",
                border: "1px solid white",
                borderCollapse: "collapse",
                padding: "7px",
                width: "100px",
              }}
            >
              {doc.id}
            </td>
            <td
              style={{
                backgroundColor: "#96D4D4",
                border: "1px solid white",
                borderCollapse: "collapse",
                padding: "7px",
                width: "800px",
              }}
            >
              {doc.patientName}

            </td>
            <td
              style={{
                backgroundColor: "#96D4D4",
                border: "1px solid white",
                borderCollapse: "collapse",
                padding: "7px",
                width: "300px",
              }}
            >
              {doc.documentName}
            </td>
            <td
              style={{
                backgroundColor: "#96D4D4",
                border: "1px solid white",
                borderCollapse: "collapse",
                padding: "7px",
                width: "300px",
              }}
            >
              {doc.issuingAuthority}
            </td>
            <td
              style={{
                backgroundColor: "#96D4D4",
                border: "1px solid white",
                borderCollapse: "collapse",
                padding: "7px",
                width: "400px",
              }}
            >
              {new Date(doc.issueDateTimestamp * 1000).toLocaleString()}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

        </header>

      </div>
      
    </>
  );
}
export default Docs;