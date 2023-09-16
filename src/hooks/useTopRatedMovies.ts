import useData from "./useData";

export interface Movies {
    id: number,
    poster_path: string,
    original_title: string
}

const useTopRatedMovies = () => useData<Movies>('/movie/top_rated');

export default useTopRatedMovies;