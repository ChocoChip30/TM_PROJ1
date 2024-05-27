import React, { useState, useEffect } from 'react';

function PatientList() {
const [patients, setPatient] = useState([]);

const display =  async () => {
await fetch('http://localhost:19000/displayPatients',{
    method: "POST",
    credentials: "include" ,
    headers:{"Access-Control-Allow-Origin" : "*"},
})
.then((response) => response.json())
    .then((data) => setPatient(data))
    .catch((error) => console.error(error));
}
return (
    <div>
    <h1>Patient List</h1>
    <button onClick={()=>{display();}}>Press me!</button>
    <ul>
        {patients.map((patient) => (
        <option key={patients.Email}>
            {patient.Name} - {patient.Email} - {patient.PhNo}
        </option>
        ))}
    </ul>
    </div>
);
}

export default PatientList;
