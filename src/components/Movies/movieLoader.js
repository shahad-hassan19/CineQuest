import axios from "axios"

export const movieLoader = async() => {
    const fetchData = async() => {
        const movieId = localStorage.getItem('movieId')
        try {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDEzNzUxODJlN2ZmNDc5MTA0ODcxODAxMzMzZDI2YyIsInN1YiI6IjY1ZmFiMmIyYTE5OWE2MDE0OWRkODljMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jryhB0VfxHPTt1Ic3Bx0otTS0lUsGq1zruj1rJi8tGs'
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

