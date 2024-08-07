import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../../context/useType";
import { useNavigate } from "react-router";
import conf from '../../conf/conf'
import '../CSS/Card.css'
import '../CSS/Loader.css'


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
                        Authorization: `Bearer ${conf.apiKey}`
                    }
                }
                const response = await axios.get(url, options)
                console.log(response.data.results)
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
            <h1 className="p-5">Trending Movies on <span>Cine<span className="text-yellow-300">Quest</span></span></h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-around">
                {
                    Array.isArray(data) && data[0]?.slice(0, 6).map((item, index) => (
                        <div className="card cursor-pointer" key={index}>
                        <div  onClick={handleClick} id={`${item.id}`}  className="card2">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-40 h-60 rounded-sm" />
                            <div className="flex flex-col items-center">
                                <h3 className="font-extrabold w-36 whitespace-nowrap text-center overflow-hidden overflow-ellipsis">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
