import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Searchbar({placeholder, data}) {

  const [filteredData, setFilteredData] = useState([])
  const router = useNavigate()

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }

  }

  return (
    <div className='search'>
        <div className='searchInput'>
            <input type='text' placeholder={placeholder} onChange={handleFilter}/>
        </div>
        { filteredData.length != 0 && (
        <div className='searchData'>
            {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <div className='one-film-data' onClick={() => router(`/films/${value.id}`)}>
                    <img src={value.poster.url} style={{height:"4rem", width:"2.6rem"}}/>
                    <div className='one-film-data-text'>
                      <p className='search-links' style={{color:'black'}}>{value.name}</p>
                      <p>
                        <font color="green" style={{fontWeight:'750', marginRight:'0.6rem'}}>{value.rating.kp.toFixed(1)}</font>
                        <font color="grey" style={{}}>{value.alternativeName} {value.year}</font>
                      </p>
                    </div>
                  </div>
                )
            })}
        </div>
        )}   

    </div>
  )
}

export default Searchbar