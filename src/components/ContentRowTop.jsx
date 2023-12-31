import React from 'react';
import { ContentRowMovies, UltimoProducto, UltimoUsuario} from './index'

export default function ContentRowTop({ productInfo, userInfo}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                <ContentRowMovies userInfo={userInfo} productInfo={productInfo}/>
                
          <div className="row">
                <UltimoProducto productInfo={productInfo}/>
                <UltimoUsuario userInfo={userInfo} />
          </div>
    </div>

  );
}