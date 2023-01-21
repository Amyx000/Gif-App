import React, { useState } from 'react'
import style from "@/styles/form.module.css"

interface Props {
    onClick:React.MouseEventHandler
}

function Register({onClick}:Props) {
    const [userdata, Setuserdata] = useState({
        name: "",
        email: "",
        pass: ""
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(userdata)
    }
    return (
        <div className={style.main}>
            <div className={style.heading}>
                Register
            </div>
            <form onSubmit={handleSubmit}>
                <input required type={"text"} value={userdata.name} onChange={e => Setuserdata(prev => ({ ...prev, name: e.target.value }))} placeholder="Enter your name" />
                <input required type={"email"} value={userdata.email} onChange={e => Setuserdata(prev => ({ ...prev, email: e.target.value }))} placeholder="Enter your email" />
                <input required type={"password"} value={userdata.pass} onChange={e => Setuserdata(prev => ({ ...prev, pass: e.target.value }))} placeholder="Enter your password" />
                <div>Already have an account? <span onClick={onClick} style={{textDecoration:"underline","cursor":"pointer"}}>Login</span></div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register