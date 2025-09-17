import React from 'react'
import useAuth from '../Contexts/hooks/useAuth'
import { Navigate } from 'react-router-dom'

export default function PrivetRouts({children}) {
    const {user, loading}=useAuth()
    if(loading){
        <span className="loading loading-spinner loading-xl"></span>
    }
    if(!user){
        <Navigate to='/login'></Navigate>
    }
  return children
}
