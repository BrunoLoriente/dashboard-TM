import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo, productInfo}) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categories = {Object.keys(productInfo.countByCategory)} productInfo={productInfo} userInfo={userInfo}/>
              <MoviesTable data = {productInfo.products}
                           header = {['id', 'name', 'description', 'category', 'detail']}/>
              <MoviesTable data = {userInfo.users}
                           header = {['id', 'name', 'email', 'detail']}/>
        </div>
              <Footer /> 
    </div>
  );
}