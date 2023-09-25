import React from 'react';
import './moviesTable.css'


export default function MoviesInDb({data, header}) {
  return (
        <ul className='moviesTableGridRows'>
            {header.map((row, i) => {
              return <li key={row + i}>{data[row]}</li>
            })}
        </ul>
  );
}
