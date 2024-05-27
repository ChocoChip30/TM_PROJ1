import { Outlet, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

const PrivateRoutes = () => {
    var authorize = false;
    console.log("Value of authorize "+authorize)
    const authBool = localStorage.getItem('authBool');
    console.log("Value of authBool "+authBool)
    /* const checkJWT = async ()=>{
    console.log("Hello :)");
    await fetch('http://localhost:19000/verifyCookie',{
    method: "POST",
    credentials: "include" ,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"  
    },
    })
    .then((res) =>res.json())
    .then((data) => 
      {
        console.log("data in PrivateRoute.js is "+JSON.stringify(data));
        console.log("data.authorize is "+data.authorize);
        if(data.authorize==true)
        {
        console.log("Condition was true!");
        auth.token=true;
        console.log("Value of auth.token in the if statement is "+auth.token);
        }
    })
    checkJWT();   
 } */
    console.log(authBool);
    if((authBool)=='true')
    {
        console.log("inside localstorage if statement");
        authorize=true;
    }
    console.log("authorize is "+authorize);
    console.log("localStorage value "+authBool);

    return(
        authorize ? <Outlet/> : <Navigate to="/login"/>
    )
}



export default PrivateRoutes