import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//
import './css/App.css';
import Navbar from './Components/UI/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import FilmList from './Components/FilmList';
import FilmService from './API/FilmService';
import { useFetching } from './Components/hooks/useFetching';


function App() {
  //
  const [films, setFilms] = useState([])
  const [limit, setLimit] = useState(80);
  const [page, setPage] = useState(1);

  // const [fetchFilms, isFilmsLoading, filmError] = useFetching(async () => {
  //   const response = await FilmService.getAll_noLimit();
  //   setFilms(response.data)
  // })

  // useEffect( () => {
  //   fetchFilms()
  // }, [] )

  const [fetchFilms, isFilmsLoading, filmError] = useFetching(async (limit, page) => {
    const response = await FilmService.getAll(limit, page);
    setFilms(response.data.docs)
  })

  useEffect( () => {
    fetchFilms(limit, page)
  }, [page, limit] )
  
  return (
    <BrowserRouter>
      <Navbar data={films}/>
      {/* <FilmList films={films} title={"Фильмы"}/> */}
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
