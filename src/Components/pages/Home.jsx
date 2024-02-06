import React, {useState, useEffect} from 'react'

import MySlider from '../Slider';
import FilmsSlider from '../FilmsSlider';

import { useFetching } from '../hooks/useFetching';
import FilmService from '../../API/FilmService';
import Spinner from 'react-bootstrap/Spinner';



function Home() {
//
  const [films, setFilms] = useState([])
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);

  const [fetchFilms, isFilmsLoading, filmError] = useFetching(async (limit, page) => {
    const response = await FilmService.getAll(limit, page);
    //setFilms([...films , ...response.data])
    setFilms(response.data.docs)
    //const totalCount = response.headers['x-total-count']
    //setTotalPages(getPageCount(totalCount, limit))
  })
  console.log(films)
  //console.log(films.filter((film) => film.genres.name.includes("боевик")))
  // console.log(films.filter((film) => film.name == "1+1"))

  // let action = films.filter((film) => film.genres.includes("боевик"))

  // console.log(action)

  useEffect( () => {
    fetchFilms(limit, page)
  }, [page, limit] )

  
//
  return (

    

    <div style={{width:'100%'}}>
        <MySlider/>
        <div className='main_content'>
            {/* <h1 >Фильмы</h1> */}
            {/* {films[10].genres && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'боевик' || film.genres[1].name == 'боевик')} title={"Боевики"}/>}
            {films[10].genres && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'комедия' || film.genres[1].name == 'комедия')} title={"Комедии"}/>}
            {films[10].genres && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'драма' || film.genres[1].name == 'драма')} title={"Драмы"}/>} */}
            {/* <FilmsSlider films={films} title={"Фентези"}/> */}
            {/* <FilmsSlider films={films} title={"Приключения"}/> */}

            {isFilmsLoading
            ?
              <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <Spinner animation="border" variant="warning" />
              </div>
            :
            <div>
              {/* {films[8] && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'комедия' || film.genres[1].name == 'комедия')} title={"Комедии"}/>}
              {films[8] && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'драма' || film.genres[1].name == 'драма')} title={"Драмы"}/>}
              {films[8] && <FilmsSlider films={films.filter((film) => film.genres[0].name === 'боевик' || film.genres[1].name == 'боевик')} title={"Боевики"}/>}
               */}

              <FilmsSlider films={films} title={"Боевики"}/>
              <FilmsSlider films={films} title={"Комедии"}/>
              <FilmsSlider films={films} title={"Фентези"}/>
              <FilmsSlider films={films} title={"Приключения"}/>
            </div>
            }

        </div>
        
    </div>
      
  )
}

export default Home