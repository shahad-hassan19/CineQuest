import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../../context/useType";
import '../CSS/Card.css'
import '../CSS/Loader.css'
import { useNavigate } from "react-router";

export default function Hero() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useType()
    const navigate = useNavigate()

    const handleClick = (e) => {
        localStorage.setItem('movieId',  e.currentTarget.getAttribute('id'))
        navigate('/movie-details')
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async() => {
            const moviesData = []
            try {
                const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-U';
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDEzNzUxODJlN2ZmNDc5MTA0ODcxODAxMzMzZDI2YyIsInN1YiI6IjY1ZmFiMmIyYTE5OWE2MDE0OWRkODljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jryhB0VfxHPTt1Ic3Bx0otTS0lUsGq1zruj1rJi8tGs'
                    }
                }
                const response = await axios.get(url, options)
                moviesData.push(response.data.results)
            } catch (error) {
                console.log(error)
            }
            setData(moviesData)
            setLoading(false)
        }
        fetchData()
    }, [type])

    if (loading) {
        return(
            <div className="h-screen flex items-center justify-center loader">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        )
    }

    return (
        <div className="mt-28 px-5">
            <h1 className="p-5">Trending on <span>Reco<span className="text-yellow-300">Bee</span></span></h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-around">
                {
                    Array.isArray(data) && data[0].slice(0, 6).map((item, index) => (
                        <div className="card cursor-pointer" key={index}>
                        <div  onClick={handleClick} id={`${item.id}`}  className="card2">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-40 h-60 rounded-sm" />
                            <div className="flex flex-col items-center">
                                <h3 className="font-extrabold cursor-pointer">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}