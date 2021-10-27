import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeApplication from '../../Firebase/firebase.init';
initializeApplication()
const useFireabase=()=>{
    const [user,setUser]= useState({})
    const auth=getAuth()
    const googleAuthProvider=new GoogleAuthProvider();

   const signInWithGoogle =()=>{
   return signInWithPopup(auth,googleAuthProvider)
  
  .catch(error =>{
      setUser( error.message)
  })
   }
//  SET Observer
   useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,user=>{
           if(user){
               setUser(user)
           }
           else{
               setUser({})
           }
       })
       return ()=>unSubscribe
   },[])
//    user LogOut
   const LogOut =()=>{
       signOut(auth)
       .then(()=>{
           setUser({})
       })
       .catch(error=>{
           setUser(error.message)
       })

   }
return{
    signInWithGoogle,
    LogOut,
    user
    
}
}
export default useFireabase;