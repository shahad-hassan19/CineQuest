
import axios from "axios"

export const movieLoader = async() => {
        const fetchData = async() => {
            const title = localStorage.getItem('movie')
            try {
                const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e586f3d5`)
                console.log(response)
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