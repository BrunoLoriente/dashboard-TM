import React from 'react'
import './moviesTable.css'
import { MoviesTableRows, MoviesTableGridHeaderFooter } from '../index'

export default function MoviesTable({data, header}) {
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <MoviesTableGridHeaderFooter header = {header} />

              <MoviesTableRows data = {data} header = {header} />
    
              <MoviesTableGridHeaderFooter header={header} />
            </div>
          </div>

  );
}

