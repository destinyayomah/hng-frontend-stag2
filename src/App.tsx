import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

export const primaryColor = '#BE123C';
export const secondaryColor = '#F8E7EB';
export const baseImgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
export const baseImgUrlO = 'https://www.themoviedb.org/t/p/original';

export interface Movie {
  id: number,
  original_title: string,
  vote_average: number,
  popularity: number,
  overview: string,
  genre_ids: [],
  release_date: string,
  poster_path: string
}

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies/:id' element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
