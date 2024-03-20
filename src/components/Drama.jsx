import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../context/useType";
import './CSS/Card.css'

export default function Drama() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useType()

    useEffect(() => {
        setLoading(true);
        const fetchData = async() => {
            let moviesList = []
            if(type === 'movie'){
                moviesList = ['Napoleon', 'InterStellar', 'Code 8', 'The Creator', 'The Dark Knight', 'Poor Things']
            }else if(type === 'series'){
                moviesList = ['Game of Thrones', 'Suits', 'The Walking Dead', 'Reacher', "The Tourist", 'Supernatural'];
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
        return <div></div>
    }

    return (
        <div className="mt-10 px-5">
            <h1 className="p-5">Drama</h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-around">
                {Array.isArray(data) && data.map((movie, index) => (
                    <div key={index} className="card">
                        <div className="card2">
                        <img src={movie?.Poster} className="w-40 h-60 rounded-sm" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-extrabold">{movie?.Title}</h3>
                            <h5 className="text-xs">{movie?.Year}</h5>
                        </div>
                        </div>
                    </div>
                ))}

                </div>
        </div>
    )
}

