import React, { useEffect, useState } from 'react'
import style from "@/styles/Home.module.css"
import Search from '@/Components/Search'
import Page from '@/Components/Page'
import ClipLoader from 'react-spinners/ClipLoader'
import Nav from '@/Components/Nav'
import Favorites from '@/Components/Favorites'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

function home() {
    const [search, Setsearch] = useState("")
    const [pagination, Setpagination] = useState(
        {
            limit: 3,
            page: 1
        }
    )
    const [loading, Setloading] = useState(false)
    const [gifs, Setgifs] = useState([
        {
            images: {
                original: { webp: "" }
            }
        }
    ])
    const [favClass, SetfavClass] = useState("favhidden")
    const [fav, Setfav] = useState<string[]>([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        Setpagination(prev => ({ ...prev, page: 1 }))
        Setloading(true)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}&limit=${pagination.limit}&offset=${0}`)
            .then((res) => res.json())
            .then((data) => {
                Setgifs(data.data)
                Setloading(false)
            })
            .catch((error) => console.log(error))

    }

    const pageFunc = (event: React.ChangeEvent<unknown>, value: number) => {
        const page = value - 1
        //here page start from 0
        Setpagination(prev => ({ ...prev, page: value }))
        Setloading(true)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}&limit=${pagination.limit}&offset=${page * 3}`)
            .then((res) => res.json())
            .then((data) => {
                Setgifs(data.data)
                Setloading(false)
            })
            .catch((error) => console.log(error))
    }

    const favFunc = (url: string) => {
        Setfav(prev => ([...prev, url]))
    }
    const unfavFunc = (url: string) => {
        Setfav(fav.filter((item) => item !== url))
    }

    return (
        <>
            <Nav onMouseEnter={() => SetfavClass("fav")} />
            <Favorites onClick={(v) => unfavFunc(v)} fav={fav} onMouseLeave={() => SetfavClass("favhidden")} className={style[favClass]} />
            <div className={style.home}>
                <Search onSubmit={handleSubmit} value={search} onChange={e => Setsearch(e.target.value)} />
                {loading ? <ClipLoader color="black" size={60} cssOverride={{ "marginTop": "20px" }} /> :
                    <>
                        {!gifs.length ?
                            <div style={{ "marginTop": "30px" }}>No search found!</div> :
                            (gifs[0].images.original.webp &&
                                <>
                                    <div className={style.gifs}>
                                        {gifs.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <img src={item.images.original.webp} />
                                                    <div>
                                                        {!fav.includes(item.images.original.webp) ? <AiOutlineStar onClick={() => favFunc(item.images.original.webp)} style={{ "color": "black", "fontSize": "25px", "cursor": "pointer" }} /> :
                                                            <AiFillStar onClick={() => unfavFunc(item.images.original.webp)} style={{ "color": "#F49D1A", "fontSize": "25px", "cursor": "pointer" }} />}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "20px" }}>
                                        <Page page={pagination.page} count={5} onChange={(e, v) => pageFunc(e, v)} />
                                    </div>
                                </>
                            )}

                    </>}
            </div>
        </>
    )
}

export default home