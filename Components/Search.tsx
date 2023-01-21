import React from 'react'
import style from "@/styles/Home.module.css"

interface Props{
    value: string | number
    onChange:React.ChangeEventHandler<HTMLInputElement>
    onSubmit:React.FormEventHandler<HTMLFormElement>
}

function Search({value, onChange, onSubmit}:Props) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={style.search}>
                    <input required value={value} onChange={onChange} type={"text"} placeholder="Search for any gifs" />
                    <button type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search