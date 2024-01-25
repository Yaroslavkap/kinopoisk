import React from 'react';
import {useNavigate} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import ocean from './photos/begining3.jpg'
import ocean2 from './photos/dn4.jpg'
import ocean3 from './photos/GOT.jpg'
import {BiPlay} from "react-icons/bi"
import { IconContext } from "react-icons";




function MySlider() {
    const router = useNavigate()
  return (
    
    <Carousel>
        <Carousel.Item style={{width: '100%', height: '100vh'}} >
            <img
            className='d-block w-100'
            src={ocean}
            alt="First slide"
            />
            <Carousel.Caption style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{color:"#ee3725", fontSize:"3rem"}}>Начало</h3>
                <p>Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана</p>
                <div className='watch-button-main' onClick={() => router(`/films/447301`) }>
                <IconContext.Provider value={{ size: '2.5rem', className: "global-class-name" }}>
                  <BiPlay/> Смотреть фильм
                </IconContext.Provider>
              </div>
                
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{width: '100%', height: '100vh'}} >
            <img
            className='d-block w-100'
            src={ocean2}
            alt="Second slide"
            />
            <Carousel.Caption style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{fontSize:"3rem"}}>Темный рыцарь</h3>
                <p>У Бэтмена появляется новый враг — философ-террорист Джокер. Кинокомикс, который вывел жанр на новый уровень</p>
                <div className='watch-button-main'  onClick={() => router(`/films/111543`) }>
                <IconContext.Provider value={{ size: '2.5rem', className: "global-class-name" }}>
                  <BiPlay/> Смотреть фильм
                </IconContext.Provider>
              </div>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{width: '100%', height: '100vh'}}>
            <img
            className='d-block w-100'
            src={ocean3}
            alt="First slide"
            />
            <Carousel.Caption style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{fontSize:"3rem"}}>Игра престолов</h3>
                <p>"Рыцари, мертвецы и драконы — в эпической битве за судьбы мира. Сериал, который навсегда изменил телевидение"</p>
                <div className='watch-button-main'  onClick={() => router(`/films/464963`) }>
                <IconContext.Provider value={{ size: '2.5rem', className: "global-class-name" }}>
                  <BiPlay/> Смотреть фильм
                </IconContext.Provider>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default MySlider