import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import cl from './Navbar.module.css'
import {BsSearch} from "react-icons/bs"
import {RxCross1} from "react-icons/rx"
import { IconContext } from "react-icons";
import Searchbar from '../../Searchbar'


function Navbar({data}) {
  //aa
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 140);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);

    stopSearch()
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);
  //aa
  const [isSearch, setIsSearch] = useState(false)

  const startSearch = () => {
    setIsSearch(true)
  }

  const stopSearch = () => {
    setIsSearch(false)
  }


  return (
     
     <div style={{transition: 'top 0.4s', top: visible ? '0' : '-100px' }}  className={ cl.navbar } >
  
       <div className={cl.navbar_label}>КИНОПОИСК</div>
        {isSearch
        ?
          <div className={cl.navbar_links}>
            {/* <input placeholder='  Фильмы и сериалы'/> */}
            <Searchbar placeholder={'Фильмы и сериалы'} data={data}/>
            <IconContext.Provider value={{ size: '2rem', className: "global-class-name" }}>
              <li onClick={stopSearch}><RxCross1 className={cl.search_icon}/></li>
            </IconContext.Provider>
          </div>
        :
        <ul className={cl.navbar_links}>
            <li><Link className={cl.links} to='/home'>Главное</Link></li>
            {/* <li><Link className={cl.links} to='/my'>Мое</Link></li> */}
            <li><Link className={cl.links} >Мое</Link></li>
            <li><Link className={cl.links} to='/films'>Фильмы</Link></li>
            <IconContext.Provider value={{ size: '1.5rem', className: "global-class-name" }}>
              <li onClick={startSearch}><BsSearch  className={cl.search_icon}/></li>
            </IconContext.Provider>
        </ul>
        } 

        {/* <ul className={cl.navbar_links}>
            <li><Link className={cl.links} to='/home'>Главное</Link></li>
            <li><Link className={cl.links} to='/my'>Мое</Link></li>
            <li><Link className={cl.links} to='/films'>Фильмы</Link></li>
            <li><BsSearch className={cl.search_icon}/></li>
        </ul> */}
    </div>
  )
}

export default Navbar