import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import link from '../backendlink';


const AuthContext = createContext();
function AuthContextProvider(props)
{
    const [loggedIn , setLoggedIN] = useState(undefined);
    const [user, setUser] = useState({}); // State to store user data

    async function getLoggedin() {
        console.log("getLoggedin function is called");
      
        try {
            const loggedInRes = await fetch(`${link}/auth/loggedIN`, {
                method: "GET",
                credentials: "include", // Include cookies in the request
              });
              
              const data = await loggedInRes.json();
              
          setLoggedIN(data);
          if (data) {

            const userData = await fetch(`${link}/auth/userdata` , {
              method: "GET",
              credentials: "include", 
            });

            const dataofuser = await userData.json();
            setUser(dataofuser);
            // const userDataRes = await axios.get('http://localhost:8000/auth/userdata');
            // setUser(userDataRes.data);
    
            // console.log("====->",dataofuser);
          }
          } catch (error) {
          console.log(error);
        
        }       
      }
      

    useEffect(()=>
    {
        getLoggedin();
    } , [])

    return(
        <AuthContext.Provider value={{loggedIn , getLoggedin , user}}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
export {AuthContextProvider};