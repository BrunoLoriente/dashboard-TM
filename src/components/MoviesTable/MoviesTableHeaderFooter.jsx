import React from 'react'
import './moviesTable.css'

export default function moviesTableGridHeaderFooter({header}) {
  return (
        <ul className='moviesTableGridHeaderFooter'>
          {header.map((col, i) => {
            return <li key={col + i}>{col}</li>
          })}
        </ul>
  );
}

