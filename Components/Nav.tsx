import React from 'react'
import style from "@/styles/Home.module.css"
import { AiFillStar } from "react-icons/ai"
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase-config'
import { useRouter } from 'next/router'


interface Props {

    onMouseEnter: () => void
}

function Nav({ onMouseEnter }: Props) {
    const router =useRouter()
    const logout = async () => {
        try {
            await signOut(auth)
            router.push("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={style.nav}>
            <div onClick={logout} style={{ "color": "white", "backgroundColor": "black", "padding": "5px", "borderRadius": "5px", "fontSize": "13px" }}>Logout</div>
            <div style={{ "display": "flex" }}>
                <div onMouseEnter={onMouseEnter}>Favorites</div>
                <AiFillStar style={{ "color": "#F49D1A", "fontSize": "20px" }} />
            </div>
        </div>
    )
}

export default Nav