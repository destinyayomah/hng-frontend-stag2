import { Movie } from "../App";
import useData from "./useData";



const useSearch = (keyword: string) => useData<Movie>('/search/movie?query=' + keyword, {}, [keyword]);

export default useSearch;