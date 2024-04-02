import axios from "axios"
import { useEffect, useState } from "react"
import useType from "../../context/useType";
import { useNavigate } from "react-router";
import conf from '../../conf/conf'
import '../CSS/Card.css'

export default function Latest() {
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
                const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2024';
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${conf.apiKey}`
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

    if (loading || data.length === 0) {
        return <div></div>
    }

    return (
        <div className="mt-10 px-5">
            <h1 className="p-5">Latest Movies</h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-around">
                {
                    Array.isArray(data) && data[0].slice(0, 6).map((item, index) => (
                        <div className="card cursor-pointer" key={index}>
                            <div onClick={handleClick} id={`${item.id}`} className="card2">
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

