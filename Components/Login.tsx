import React, { useState } from 'react'
import style from "@/styles/form.module.css"


interface Props {
    onClick:React.MouseEventHandler
}

function Login({onClick}:Props) {
    const [userdata, Setuserdata]=useState({
        email:"",
        pass:""
    })
    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(userdata)
    }
  return (
    <div className={style.main}>
        <div className={style.heading}>
            Login
        </div>
        <form onSubmit={handleSubmit}>
            <input required type={"email"} value={userdata.email} onChange={e=>Setuserdata(prev=>({...prev,email:e.target.value}))} placeholder="Enter your email"/>
            <input required type={"password"} value={userdata.pass} onChange={e=>Setuserdata(prev=>({...prev,pass:e.target.value}))} placeholder="Enter your password"/>
            <div>Not register? <span onClick={onClick} style={{textDecoration:"underline","cursor":"pointer"}}>Create Account</span></div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login