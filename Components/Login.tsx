import React, { useState } from 'react'
import style from "@/styles/form.module.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase-config'
import { useRouter } from 'next/router'


interface Props {
    onClick:React.MouseEventHandler
}

function Login({onClick}:Props) {
  const router = useRouter()

    const [userdata, Setuserdata]=useState({
        email:"",
        pass:""
    })
    const[err,Seterr]=useState(false)
    const handleSubmit =async (e:React.FormEvent)=>{
        e.preventDefault()
        try {
           await signInWithEmailAndPassword(auth,userdata.email,userdata.pass)
           router.push("/home")
           Seterr(false)
        } catch (error) {
            Seterr(true)
        }
    }
  return (
    <div className={style.main}>
        <div className={style.heading}>
            Login
        </div>
        <form onSubmit={handleSubmit}>
            <input required type={"email"} value={userdata.email} onChange={e=>Setuserdata(prev=>({...prev,email:e.target.value}))} placeholder="Enter your email"/>
            <input required type={"password"} value={userdata.pass} onChange={e=>Setuserdata(prev=>({...prev,pass:e.target.value}))} placeholder="Enter your password"/>
            {err&&<div style={{"color":"red","fontSize":"13px"}}>Wrong Credentials</div>}
            <div>Not register? <span onClick={onClick} style={{textDecoration:"underline","cursor":"pointer"}}>Create Account</span></div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login