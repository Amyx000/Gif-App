import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

function Main() {
    const [haveAcc, SethaveAcc] = useState(true)
    return (
        <div>
            {haveAcc ?
                <Login onClick={()=>SethaveAcc(false)}/> :
                <Register onClick={()=>SethaveAcc(true)}/>
            }
        </div>
    )
}

export default Main