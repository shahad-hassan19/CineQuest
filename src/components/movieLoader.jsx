
import axios from "axios"

export const movieLoader = async() => {
        const fetchData = async() => {
            const title = localStorage.getItem('movie')
            const contentType = localStorage.getItem('type')
            try {
                const response = await axios.get(`https://www.omdbapi.com/?t=${title}&type=${contentType}&apikey=e586f3d5`)
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