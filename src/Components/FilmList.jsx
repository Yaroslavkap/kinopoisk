import React from "react";
import FilmItem from "./FilmItem";
// import {TransitionGroup, CSSTransition} from 'react-transition-group'

const FilmList = function({films, title, remove}) {


  // if (!films.length) {
  //   return (
  //     <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
  //   )
  // }
  
    return(
      <div className="film-list-page">
          <h1 className="film-list-header">{title}</h1>
          <div className="film-list">
            
              {films.map((film, index) =>
                <FilmItem remove={remove} number={index + 1} film={film}/>
              )} 
          </div>
      </div>
    )
}

export default FilmList