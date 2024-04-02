import axios from "axios"
import conf from '../../conf/conf'

export const seriesLoader = async() => {
    const fetchData = async() => {
        const seriesId = localStorage.getItem('seriesId')
        try {
            const url = `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`;
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

