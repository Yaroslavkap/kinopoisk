import React, {useEffect, useState} from 'react'
import FilmService from '../../API/FilmService'
import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import Spinner from 'react-bootstrap/Spinner';
import {BiPlay} from "react-icons/bi"
import {RxCross1} from "react-icons/rx"
import { IconContext } from "react-icons";
import FilmContent from '../FilmContent';

 function FilmIdPage() {
  const [watch, setWatch] = useState(false)
  

  const startWatch = () => {
    setWatch(true)
  }

  const stopWatch = () => {
    setWatch(false)
  }
  const params = useParams()
  const [film, setFilm] = useState({})
  const [fetchFilmById, isLoading, error] = useFetching(async (id) => {
      const response = await FilmService.getById(id)
      setFilm(response.data)
  })
  

  useEffect( () => {
    fetchFilmById(params.id)
  }, [params.id] )
  console.log(film)
  //console.log(film.poster.url)
  return (
    <div className='film-id-page'>
        {isLoading
        ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Spinner animation="border" variant="warning" />
        </div> 
        :
        
            <div className='film-id-content'>
              {/* <h1>Фильм №{params.id}  {film.name} </h1> */}
            {film.poster && <img src={film.poster.url} style={{width:"52vh", height:"80vh"}}/>}
            {/* <img src={params.poster.url} style={{width:"52vh", height:"80vh"}}/> */}
            {/* <div style={{width:"52vh", height:"80vh", }}></div> */}
            {/* <div className='watch-block'>
              
              <iframe
               style={{width:"60vw", height:"75vh"}} src={film.videos.trailers[0].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen>
              </iframe>
            </div> */}

            {watch
            ?
            <div className='watch-block'>
              <div className='watch-label'>
                <h1 style={{fontWeight:"800", fontSize:"2rem"}}>{film.name}</h1>
                <IconContext.Provider value={{ size: '5vh', className: "global-class-name" }}>
                <li style={{listStyleType: "none"}} onClick={stopWatch}><RxCross1/></li>
                </IconContext.Provider>
              </div>
              
              <iframe
               style={{width:"60vw", height:"75vh"}} src={film.videos.trailers[0].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen>
              </iframe>
            </div>
            :
            <div className='film-id-content-data'>
              {film.name && <h1 style={{fontWeight:"800", fontSize:"2.5rem"}}>{film.name}({film.year})</h1>}
              <p style={{color:"grey", fontSize:"1.4rem"}}>{film.alternativeName}  {film.ageRating}+</p>
              <p style={{fontSize:"1.2rem"}}>{film.description}</p>
              
              <div className='watch-button' onClick={startWatch}>
                <IconContext.Provider value={{ size: '2.5rem', className: "global-class-name" }}>
                  <BiPlay/> Смотреть трейлер
                </IconContext.Provider>
              </div>

              <div className='film-id-about'>
                <h2 style={{fontSize:"1.6rem"}}>O фильме</h2>
                <p><font className='p-about' color="white">Год производства</font>{film.year}</p>
                {/* <p><font className='p-about' color="white">Страна</font>{film.countries[0].name}</p> */}
                {film.genres && <p><font className='p-about' color="white">Жанр</font>{film.genres[0].name}, {film.genres[1].name}</p>}
                <p><font className='p-about' color="white">Время</font>{film.movieLength}мин</p>
                <p><font className='p-about' color="white"></font></p>
                {/* <p><font className='p-about' color="white">В главных ролях</font></p> */}
                
              </div>

            </div>
            } 
            
            </div>
          }
        
    </div>
    // <div className='film-id-page'>

    //   <h1>{film.name}</h1>
    //   {film.poster && <h1>{film.poster.url}</h1>}
    //   {/* <FilmContent film={film}/> */}
    //   {isLoading &&
    //       <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}>
    //         <Spinner animation="border" variant="warning" />
    //       </div>
    //     }
    // </div>
  )
}

export default FilmIdPage