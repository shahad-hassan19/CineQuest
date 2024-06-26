import { useNavigate } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"
import conf from '../../conf/conf'
import '../CSS/Card.css'

export default function SearchMovie() {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const handleClick = (e) => {
        localStorage.setItem('movieId',  e.currentTarget.getAttribute('id'))
        navigate('/movie-details')
    }

    useEffect(() => {
        const fetchData = async() => {
            const title = localStorage.getItem('movie')
            try {
                const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${conf.apiKey}`
                    }
                };
                const response = await axios.get(url, options)
                setData(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])



    return (
        <>
            <div className="mt-40 flex flex-col md:flex-wrap md:flex-row gap-5 md:px-12 justify-around items-center">
                {
                    data.map((item, index) => (
                        <div className="card flex flex-col items-center cursor-pointer" key={index}>
                            <div onClick={handleClick} id={`${item.id}`} className="card2">
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-40 h-60 rounded-sm" />
                                <div className="flex flex-col items-center">
                                    <h3 className="font-medium w-36 whitespace-nowrap text-center overflow-hidden overflow-ellipsis">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
