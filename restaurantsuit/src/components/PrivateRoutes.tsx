import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { LoginService } from '../services/loginService'

export default function PrivateRoutes(){
  let auth =  LoginService.getUser();
  return(
    auth ? <Outlet/> : <Navigate to="/login"/>
  )
}