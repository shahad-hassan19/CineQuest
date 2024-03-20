import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../context/useType";

export default function Action() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useType()

    const handleClick = (movieTitle) => {
        console.log(movieTitle)
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async() => {
            let moviesList = []
            if(type === 'movie'){
                moviesList = ['The Old Guard', 'The Hunger Games', 'Fast X', 'Dune', 'Avatar', 'Freelance']
            }else if(type === 'series'){
                moviesList = ['Peaky Blinders', 'Shogun', 'Arrow', 'Sherlock', "The Boys", 'The Wheel of Time'];
            }

            const moviesData = []
            for(const movieTitle of moviesList){
                try {
                    const response = await axios.get(`https://www.omdbapi.com/?t=${movieTitle}&type=${type}&apikey=e586f3d5`)
                    moviesData.push(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            setData(moviesData)
            setLoading(false)
        }
        fetchData()
    }, [type])

    if (loading) {
        return <div className="h-screen flex justify-center items-center text-3xl font-medium">
                    Loading...
                </div>
    }

    return (
        <div className="mt-10 px-5">
            <h1 className="p-5">Action</h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-around">
                {Array.isArray(data) && data.map((movie, index) => (
                    <div onClick={handleClick(movie.Title)} key={index} className="shadow-sm shadow-white">
                        <img src={movie?.Poster} className="w-40 h-60 rounded-sm" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-extrabold">{movie?.Title}</h3>
                            <h5 className="text-xs">{movie?.Year}</h5>
                        </div>
                    </div>
                ))}

                </div>
        </div>
    )
}

