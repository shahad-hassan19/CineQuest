import { useState } from "react"
import axios from "axios"
import useType from "../context/useType"
import { useNavigate } from "react-router"

export default function Navbar() {
    const [movie, setMovie] = useState('')
    const { type, findMovie, findSeries } = useType()
    const navigate = useNavigate()
    const title = localStorage.getItem('movie')

    const handleClick = (e) => {
        e.preventDefault()
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?t=${movie}&type=${type}&apikey=e586f3d5`)
                localStorage.setItem('movie', response.data.Title)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        navigate(`/${title}`)
    }


    return (
        <>
            <nav className="w-full bg-black h-28 fixed top-0 left-0">
                <div className="md:h-full flex items-center justify-around m-5 md:m-0">
                <span className="text-2xl font-bold">Reco<span className="text-2xl font-bold text-yellow-300">Bee</span></span>
                <div className="lg:mx-20 hidden md:block">
                    <input
                        id="search" type="search"
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        className="p-1 rounded-sm outline-none lg:w-72 text-black"
                        placeholder="Search Movies by Name, Year, Genre" />
                    <button onClick={handleClick}
                        htmlFor="search"
                        className="bg-yellow-300 text-black py-1 px-2 ml-2 rounded-md">Search</button>
                </div>
                <div>
                    <button onClick={() => {findMovie()}} className="bg-yellow-300 text-black py-1 px-2 ml-2 rounded-md">Movies</button>
                    <button onClick={() => {findSeries()}} className="bg-yellow-300 text-black py-1 px-2 ml-2 rounded-md">Series</button>
                </div>
                </div>
                <div className="md:hidden flex items-center justify-center m-5">
                    <input
                        id="sm-search" type="search"
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        className="p-1 rounded-sm outline-none"
                        placeholder="Search Movies by Name, Year, Genre" />
                    <button onClick={handleClick}
                        htmlFor="sm-search"
                        className="bg-yellow-300 text-black py-1 px-2 ml-2 rounded-md">Search</button>
                </div>
            </nav>
        </>
    )
}

