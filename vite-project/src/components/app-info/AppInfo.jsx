import React from 'react'
import './AppInfo.css'

const AppInfo = ({countMovies, countFavourites}) => {
    
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Barcha Kinolar Soni: {countMovies}</p>
            <p className='fs-4 text-uppercase'>Sevimli Kinolar Soni: {countFavourites}</p>
        </div>
    )
}
export default AppInfo