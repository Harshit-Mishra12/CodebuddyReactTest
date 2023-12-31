import {useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import React from 'react'


export const PrivateRoute=({children})=>{
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    const location=useLocation()

    if(!isAuth){
        return <Navigate to={"/"}  state={{data:location.pathname}} replace />
    }
    return children
}








