import React from 'react';
import { useState, useEffect } from 'react';

export default function UltimoUsuario({ userInfo }) {
  const [imagenUrl, setImagenUrl] = useState('');

  const lastUser = userInfo.users[userInfo.users.length - 1];

  useEffect(() => {
    async function fetchImagenUrl() {
      try {
        const response = await fetch(lastUser.detail);
        const data = await response.json();
        setImagenUrl(data.data.imagen);
      } catch (error) {
        console.error('Error al obtener la URL de la imagen:', error);
      }
    }

    if (lastUser) {
      fetchImagenUrl();
    }
  }, [lastUser]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último usuario agregado</h5>
        </div>
        <div className="card-body">
          {lastUser ? (
            <div>
              <h2>{lastUser.name}</h2>
              <p>{lastUser.description}</p>
              {imagenUrl && <img src={imagenUrl} alt={lastUser.name} />}
            </div>
          ) : (
            <p>No hay productos disponibles.</p>
          )}
          
        </div>
      </div>
    </div>
  );
}

