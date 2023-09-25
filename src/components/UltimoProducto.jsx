import React from 'react';
import { useState, useEffect } from 'react';

export default function UltimoProducto({ productInfo }) {
  const [imagenUrl, setImagenUrl] = useState('');

  const lastProduct = productInfo.products[productInfo.products.length - 1];

  useEffect(() => {
    async function fetchImagenUrl() {
      try {
        const response = await fetch(lastProduct.detail);
        const data = await response.json();
        setImagenUrl(data.data.imagen);
      } catch (error) {
        console.error('Error al obtener la URL de la imagen:', error);
      }
    }

    if (lastProduct) {
      fetchImagenUrl();
    }
  }, [lastProduct]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
        </div>
        <div className="card-body">
          {lastProduct ? (
            <div>
              <h2>{lastProduct.name}</h2>
              <p>{lastProduct.description}</p>
              {imagenUrl && <img src={imagenUrl} alt={lastProduct.name} />}
            </div>
          ) : (
            <p>No hay productos disponibles.</p>
          )}
          
        </div>
      </div>
    </div>
  );
}

