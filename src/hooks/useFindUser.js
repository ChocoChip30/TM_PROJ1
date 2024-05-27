import { useState, useEffect } from 'react';

export default function useFindUser() {
   const [user, setUser] = useState(null);
   const [isLoading, setLoading] = useState(true);

   async function findUser() {
      console.log("inside findUser");
   await fetch("http://localhost:19000/user", {
      method: "POST",
      credentials: "include" ,
      headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin" : "*"  
       },
   })
   .then(res=>{
      console.log("res.data in useFindUser "+res.data);
      setUser(res.data);
      setLoading(false);
   })
   .catch(err=>
      {
      setLoading(false);
   });
}
   findUser();

return {
   user,
   isLoading
   }
}



/* export default function useFindUser() {
   const [user, setUser] = useState(null);
   const [isLoading, setLoading] = useState(true);
useEffect(() => {
   async function findUser() {
      console.log("inside findUser");
   await fetch("http://localhost:19000/user", {
      method: "POST",
      credentials: "include" ,
   })
   .then(res=>{
      console.log("res.data in useFindUser "+res.data);
      setUser(res.data);
      setLoading(false);
   })
   .catch(err=>
      {
      setLoading(false);
   });
}
   findUser();
}, []);
return {
   user,
   isLoading
   }
} */