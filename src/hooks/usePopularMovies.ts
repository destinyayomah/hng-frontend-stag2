import { Movie } from "../App";
import useData from "./useData";

const usePopularMovies = () => useData<Movie>('/movie/popular');

export default usePopularMovies;