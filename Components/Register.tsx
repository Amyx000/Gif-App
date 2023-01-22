import React, { useState } from 'react'
import style from "@/styles/form.module.css"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '@/firebase-config'
import { useRouter } from 'next/router'

interface Props {
    onClick:React.MouseEventHandler
}

function Register({onClick}:Props) {
    const router =useRouter()
    const [userdata, Setuserdata] = useState({
        email: "",
        pass: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth,userdata.email,userdata.pass)
            router.push("/home")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={style.main}>
            <div className={style.heading}>
                Register
            </div>
            <form onSubmit={handleSubmit}>
                <input required type={"email"} value={userdata.email} onChange={e => Setuserdata(prev => ({ ...prev, email: e.target.value }))} placeholder="Enter your email" />
                <input required type={"password"} value={userdata.pass} onChange={e => Setuserdata(prev => ({ ...prev, pass: e.target.value }))} placeholder="Enter your password" />
                <div>Already have an account? <span onClick={onClick} style={{textDecoration:"underline","cursor":"pointer"}}>Login</span></div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register