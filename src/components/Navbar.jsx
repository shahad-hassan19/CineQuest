import { useState, useEffect } from "react"
import useType from "../context/useType"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [target, setTarget] = useState('')
    const { type, findMovie, findSeries } = useType()
    const [contentType, setContentType] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        const storedType = localStorage.getItem('type')
        setContentType(storedType)
    }, [type])

     const handleClick = async(e) => {
        e.preventDefault()
        if(contentType === 'movie'){
            try {
                localStorage.removeItem('movie')
                localStorage.setItem('movie', target)
            } catch (error) {
                console.log(error)
            }
            navigate('/search-movie')
        } else if (contentType === 'series'){
            try {
                localStorage.removeItem('series')
                localStorage.setItem('series', target)
            } catch (error) {
                console.log(error)
            }
        navigate('/search-series')
        }
     }

    return (
        <>
            <nav className="w-full z-50 bg-black min-h-fit md:h-28 fixed top-0 left-0 shadow-sm shadow-white">
                <div className="md:h-full flex items-center justify-around m-5 md:m-0">
                    <Link to='/' className="text-2xl font-bold">Cine<span className="text-2xl font-bold text-yellow-300">Quest</span></Link>
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

