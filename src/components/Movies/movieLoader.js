import axios from "axios"
import conf from '../../conf/conf'

export const movieLoader = async() => {
    const fetchData = async() => {
        const movieId = localStorage.getItem('movieId')
        try {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${conf.apiKey}`
                }
            };
            const response = await axios.get(url, options)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    try {
        return await fetchData()
    } catch (error) {
        return null
    }
}

