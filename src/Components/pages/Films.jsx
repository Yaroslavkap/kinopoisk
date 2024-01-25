import React, {useState, useEffect, useRef} from 'react'

import { useFetching } from '../hooks/useFetching';
import FilmService from '../../API/FilmService';
import FilmList from '../FilmList';
import Spinner from 'react-bootstrap/Spinner';
import { useObserver } from '../hooks/useObserver';

function Films() {

  const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
  }

  const [films, setFilms] = useState([])

  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(5);

  const lastElement = useRef()

  const [fetchFilms, isFilmsLoading, filmError] = useFetching(async (limit, page) => {
    const response = await FilmService.getAll(limit, page);
    console.log(response.data.docs)
    setFilms([...films , ...response.data.docs])
    // const totalCount = response.headers['x-total-count']
    // setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isFilmsLoading, () => {
    setPage(page + 1)
  })

  useEffect( () => {
    fetchFilms(limit, page)
  }, [page, limit] )

  return (
    <div className='film_content'>
        <FilmList films={films} title={"Фильмы"}/>
        <div ref={lastElement} style={{height: 20}}/>

        {isFilmsLoading &&
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Spinner animation="border" variant="warning" />
          </div>
        }
    </div>

    
  )
}

export default Films