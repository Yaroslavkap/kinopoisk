import React from "react";

// import {TransitionGroup, CSSTransition} from 'react-transition-group'

const FilmContent = function({film}) {


  let url1 = film.poster.url
  
    return(
      <div className="film-content">
          <h1 style={{fontWeight:"800", fontSize:"2.5rem"}}>{film.name}({film.year})</h1>
          <h1>hhh</h1>
          {/* <h1>{url1}</h1> */}
          {/* <p><font className='p-about' color="white">Время</font>{film.movieLength}мин</p>
          <p><font className='p-about' color="white">Жанр</font>{film.genres[0].name}</p> */}
          {/* <div className='film_item'   style={{backgroundImage:`url(${film.poster.url})`}}></div> */}
      </div>
      
    )
}

export default FilmContent