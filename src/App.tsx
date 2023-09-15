import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

export const primaryColor = '#BE123C';
export const secondaryColor = '#F8E7EB';
export interface Movie {
  id: number,
  title: string,
  image: string
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
