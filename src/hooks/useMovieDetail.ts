import useData from "./useData";

export interface MoviesDetail {
    id: number,
    poster_path: string,
    original_title: string,
    production_companies: [],
    genres: Genres[],
    popularity: number,
    production_countries: ProductionCountries[],
    release_date: string
    runtime: number,
    video: boolean,
    vote_average: number,
    overview: string,
    vote_count: number
}

export interface ProductionCountries {
    iso_3166_1: string,
    name: string
}

export interface Genres {
    id: number,
    name: string
}

const useMovieDetail = (id: number) => useData<MoviesDetail>('/movie/' + id, {}, [id]);

export default useMovieDetail;