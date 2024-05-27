import React, { useState, useEffect } from 'react';
import Test from './test';


    const MyComponent = () => {
        const [data, setData] = useState([]);
      
        useEffect(() => {
        display();
        }, []);


        const display =  async () => {
            await fetch('http://localhost:19000/displayPatients',{
                method: "POST",
                credentials: "include" ,
                headers:{"Access-Control-Allow-Origin" : "*"}  
            
                
                
                
            })
            .then((response) => response.json())
            .then((response) => {setData(response);
            console.log(response)})
            .catch((error) => console.error(error));
            
            }

            
            return (
                <div>
                    
                    <select>
                {data?.map(item => (
                <option key={item.Email} value={item.Name}>{item.Name}  {item.Email}  {item.PhNo}</option>
                ))} 
                </select>
                </div>
                
                )
            
    };
        




export default MyComponent;