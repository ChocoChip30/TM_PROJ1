import UserContext from './UserContext';
import { useState, useContext } from 'react';


export default function useAuth() {
    const { setUser } = useContext(UserContext);
    //set user in context and push them home
    const setUserContext = async () => {
    console.log("inside useAuth.js");
    return await fetch('http://localhost:19000/user')
    .then(res => {
        setUser(res.data.currentUser);
      }).catch((err) => {
        console.log(err.response.data);
    })
   }
}