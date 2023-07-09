import axios from "axios";

export async function fetchMoviesApi() {
    try {
        const fullUrl = 'https://movie-twist.onrender.com/shows';
        const response = await axios.get(fullUrl);
        return response.data;
    } catch (error) {
        throw (JSON.stringify(error))
    }
}