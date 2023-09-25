import React from 'react';
import { Cards } from './index';

export default function ContentRowMovies ({ userInfo, productInfo }) {
  const totalUsuarios = userInfo.count;
  const totalProductos = productInfo.count;
  const totalCategorias = Object.keys(productInfo.countByCategory).length;

  return (
    <div className='row'>
      <Cards 
        title="Total Usuarios"
        quantity={totalUsuarios}
        color="primary"
        icon="fa-users"
      />
      <Cards 
        title="Total Productos"
        quantity={totalProductos}
        color="success"
        icon="fa-box"
      />
      <Cards 
        title="Total Categorías"
        quantity={totalCategorias}
        color="warning"
        icon="fa-tag"
      />
    </div>
  );
}


