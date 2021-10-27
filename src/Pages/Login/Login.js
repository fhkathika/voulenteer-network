import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const history=useHistory()
    const location=useLocation()
    const redirect_url=location.state?.from || '/home'

    const {signInWithGoogle}=useAuth()
   const handleSignInUsingGoogle =()=>{
       signInWithGoogle()
       .then(result =>{
           history.push(redirect_url)
      
    })

   }
    return (
        <div>
           <h1>Or</h1>
           <br />
          
           <button onClick={handleSignInUsingGoogle} className='btn-primary'>Google Sign In</button> 
        </div>
    );
};

export default Login;