import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import FilmItem from './FilmItem';
import {BsArrowRightCircleFill} from "react-icons/bs"
import { IconContext } from "react-icons";

function FilmsSlider({films, title, remove}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        //nextArrow: <SampleNextArrow />
      }
      
  return (
    <div>

      <h1 style={{marginLeft:'.4rem'}}>{title}</h1>

      <Slider {...settings} style={{width:'90vw'}}>

              {films.map((film, index) =>
                  <FilmItem remove={remove} number={index + 1} film={film}/>
              )} 

              <div>
                <div className='filmsSlider-next'>
                  <IconContext.Provider value={{ size: '4rem', className: "global-class-name", color:'lightgrey',background:'white' }}>
                    {/* <BsArrowRightCircleFill/>
                    <h5 style={{marginTop:'1rem' }}>Показать все</h5> */}
                  </IconContext.Provider>
                </div>
              </div>
          
      </Slider>
    </div>
    
  )
}

export default FilmsSlider