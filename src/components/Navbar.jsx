import { useState } from "react"
import axios from "axios"
import useType from "../context/useType"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [target, setTarget] = useState('')
    const { type, findMovie, findSeries } = useType()
    const navigate = useNavigate()
    const contentType = localStorage.getItem('type')

    useEffect(() => {
        const handleClick = async(e) => {
        e.preventDefault()
        if(contentType === 'movie'){
            try {
                const response = await axios.get(`https://www.omdbapi.com/?t=${target}&apikey=e586f3d5`)
                localStorage.removeItem('movie')
                localStorage.setItem('movie', response.data.Title)
            } catch (error) {
                console.log(error)
            }
            navigate('/search-movie')
        } else if (contentType === 'series'){
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${target}&include_adult=false&language=en-US&page=1`)
                localStorage.removeItem('series')
                localStorage.setItem('series', response.data.Title)
            } catch (error) {
                console.log(error)
            }
        navigate('/search-series')
        }
    }
    }, [type])


    return (
        <>
            <nav className="w-full z-50 bg-black min-h-fit md:h-28 fixed top-0 left-0 shadow-sm shadow-white">
                <div className="md:h-full flex items-center justify-around m-5 md:m-0">
                    <Link to='/' className="text-2xl font-bold">Reco<span className="text-2xl font-bold text-yellow-300">Bee</span></Link>
                    <div className="lg:mx-20 hidden md:block">
                        <input
                            id="search" type="search"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="p-1 rounded-sm outline-none lg:w-72 text-black"
                            placeholder="Search Movies by Name, Year, Genre" />
                        <button onClick={handleClick}
                            htmlFor="search"
                            className="bg-yellow-300 text-black py-1 px-2 ml-2 outline-none rounded-md">Search</button>
                    </div>
                    <div className="flex text-white">
                        <Link to="/movie" onClick={() => {findMovie()}} className={`movies-btn block py-2 sm:pr-2 md:pr-4 font-semibold text-yellow-300 text-xl  cursor-pointer`}>Movies</Link>
                        <Link to="/series" onClick={() => {findSeries()}} className={`series-btn block py-2 pl-2 font-semibold text-xl cursor-pointer`}>Series</Link>
                    </div>
                </div>
                <div className="md:hidden flex items-center justify-center m-5">
                    <input
                        id="sm-search" type="search"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        className="p-1 rounded-sm outline-none text-black"
                        placeholder="Search Movies by Name, Year, Genre" />
                    <button onClick={handleClick}
                        htmlFor="sm-search"
                        className="bg-yellow-300 outline-none text-black py-1 px-2 ml-2 rounded-md">Search</button>
                </div>
            </nav>
        </>
    )
}

