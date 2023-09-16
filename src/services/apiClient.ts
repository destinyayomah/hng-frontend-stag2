import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDQxOGYzY2FkZDFiYWZjZTA0ODhjZTk4ZDNmYjFjNyIsInN1YiI6IjY1MDBiYjI1NGY5YTk5MDBhZDU4ZjlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19AWBj4reJKmh2kTUya0JMk_FvnfSAzckBPy7ZFn8K8'
    },
    params: {}
});

export default apiClient;