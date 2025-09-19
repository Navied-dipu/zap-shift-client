import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import { auth } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const googleProvider= new GoogleAuthProvider()
export default function AuthProvider({ children }) {

    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signInUser=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('user in the auth satate change', currentUser)
        setLoading(false)
    })
    return ()=>{ 
        unSubscribe()
    }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    signInUser,
    logOut
  };
  return <AuthContext value={authInfo}>
    {children}
    </AuthContext>;
}
