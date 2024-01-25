import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import FilmPlace from "./FilmPlace";
import ocean3 from './photos/witcher2.jpg'


const FilmItem = function(props) {
     const router = useNavigate()
    // console.log(router)
    // console.log(props)

    // const [isClicked, setIsClicked] = useState(false)
    // const toClick = () => {
    //   setIsClicked(true)
    // }
    // const toUnClick = () => {
    //   setIsClicked(false)
    // }

    return(
      <div className="film-item-place">
        
          <div>
            <div className='film_item' onClick={() => router(`/films/${props.film.id}`) }  style={{backgroundImage:`url(${props.film.poster.url})`}}>
              {/* <div className='film_item_content'>
                <strong>{props.film.id} {props.film.name}</strong>
                <div>{props.film.body}</div>
              </div> */}
              <div className='film_btns'>
              {/* <button onClick={() => router(`/films/${props.film.id}`)}>Открыть</button> */}
              </div>
            </div>
          </div>
      
      </div>
    )
}

export default FilmItem