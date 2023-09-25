import React from 'react';
import { ContentRowMovies, UltimoProducto, GenresInDb} from './index'

export default function ContentRowTop({categories, productInfo, userInfo}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                <ContentRowMovies userInfo={userInfo} productInfo={productInfo}/>
                
          <div className="row">
                <UltimoProducto productInfo={productInfo}/>
                <GenresInDb categories={categories} />
          </div>
    </div>

  );
}