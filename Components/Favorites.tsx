import React, { useState } from 'react'
import style from "@/styles/Home.module.css"
import {AiFillStar} from "react-icons/ai"


interface Props {
  className: string
  onMouseLeave: () => void
  fav: string[]
  onClick:(url:string)=>void
}

function Favorites({ className, onMouseLeave, fav, onClick }: Props) {

  return (
    <div className={className} onMouseLeave={onMouseLeave}>
      <div>Favorites</div>
      {fav.length?<div>
        {fav.map((item, index) => {
          return (
            <div className={style.favbar} key={index}>
              <img className={style.favgif} src={item} alt=""/>
              <AiFillStar onClick={()=>onClick(item)} style={{"color":"#F49D1A","fontSize":"20px","cursor":"pointer"}}/>
            </div>
          )
        })}
      </div>:
      <div style={{"fontSize":"15px","marginTop":"30px"}}>No Favorites Added</div>}
    </div>
  )
}

export default Favorites