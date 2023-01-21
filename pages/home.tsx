import React, { useState } from 'react'
import style from "@/styles/Home.module.css"
import Search from '@/Components/Search'
function home() {
    const [search,Setsearch]=useState("")
    const [pagination,Setpagination]=useState(
        {
            limit:3,
            offset:0
        }

    )
    const [gifs,Setgifs]=useState([
        {
            images:{
                original:{webp:""}
            }
        }
    ])

    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}&limit=${pagination.limit}&offset=${0}`)
        .then((res)=>res.json())
        .then((data)=>Setgifs(data.data))
        .catch((error)=>console.log(error))

    }

    console.log(gifs)

    const pageFunc= (page:number)=>{
      //here page start from 0
        Setpagination(prev=>({...prev,offset:page*3}))
    }

  return (
    <div className={style.home}>
        <Search onSubmit={handleSubmit} value={search} onChange={e=>Setsearch(e.target.value)}/>
        {!gifs.length?
        <div style={{"marginTop":"30px"}}>No search found!</div>:
        (gifs[0].images.original.webp&&
        <div className={style.gifs}>
            {gifs.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={item.images.original.webp}/>
                    </div>
                )
            })}
        </div>)}
    </div>
  )
}

export default home