import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../context/useType";
import './CSS/Card.css'
import './CSS/Loader.css'

function Hero() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useType()


    useEffect(() => {
        setLoading(true);
        const fetchData = async() => {
            let moviesList = []
            if(type === 'movie'){
                moviesList = ['The Old Guard', 'Madame Web', 'Dune Part Two', 'Oppenheimer', 'Dune', 'Argylle']
            }else if(type === 'series'){
                moviesList = ['Peaky Blinders', 'The Gentlemen', 'Friends', 'Suits', "Shogun", 'The Signal'];
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
        return <div className="mt-28 h-screen flex items-center justify-center loader">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
    }

    return (
        <div className="mt-28 px-5">
            <h1 className="p-5">Trending on <span>Reco<span className="text-yellow-300">Bee</span></span></h1>
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

export default Hero