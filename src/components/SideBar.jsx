import React from 'react';
import image from '../assets/images/logo-DH.png'
import PropTypes from 'prop-types'
import { ContentWrapper, GenresInDb, UltimoProducto, ContentRowMovies, MoviesTable , SearchMovies, NotFound, ListaProductos } from './index'
import { Link, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';



export default function SideBar(props) {

      const [userInfo, setUserInfo] = useState({
            count: 0,
            users: []
      });
      const [productInfo, setProductInfo] = useState({
            count: 0,
            countByCategory: {},
            products: []
      });
      
      

      async function fetchData(endpoint, setState) {
            try {
                  const apiFetch = await fetch(endpoint)
                  const data = await apiFetch.json()

                  setState(data.data)
                  
            } catch (error) {
                  console.error(error)
            }
      }

      useEffect(() => {
            async function data() {
                  await Promise.all([fetchData('api/users', setUserInfo), fetchData('/api/products', setProductInfo)])
            }
            data()
      }, [])
      
  return (
    <>  
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Link exact className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                              <div className="sidebar-brand-icon">
                                    <img className="w-100" src={image} alt="Digital House" />
                              </div>
                        </Link>

            <hr className="sidebar-divider my-0" />
                  <li className="nav-item active">
                        <Link className="nav-link" to="/">
                              <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard - Tienda Merienda</span>
                        </Link>
                  </li>
            <hr className="sidebar-divider" />


            <div className="sidebar-heading">Actions</div>
            { props.sideBar.map( (nav) => 
                  nav.title ? (
                        <li key={nav.id} className="nav-item">
                                    <Link className="nav-link collapsed" to={nav.route}>
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>{nav.title}</span></Link>
                        </li>
                  ): null
            )}
            <hr className="sidebar-divider d-none d-md-block" />
      </ul>


      <Routes>
            <Route path ='/' exact  element={<ContentWrapper
                                                            productInfo = {productInfo}
                                                            userInfo = {userInfo}/>} />

            <Route path ='/categorias' exact  element={<GenresInDb 
                                                            categories = {Object.keys(productInfo.countByCategory)}/>} />

            <Route path ='/ultimoProducto' exact  element={<UltimoProducto
                                                            productInfo={productInfo}/>} />

            <Route path ='/stats' exact  element={<ContentRowMovies 
                                                            userInfo={userInfo} productInfo={productInfo} />} />

            <Route path ='/tableUser' exact  element={<MoviesTable 
                                                                  data = {userInfo.users}
                                                                  header = {['id', 'nombre', 'email', 'detail']}/>} />

            <Route path ='/tableProduct' exact  element={<MoviesTable 
                                                                  data = {productInfo.products}
                                                                  header = {['id', 'name', 'description', 'category', 'detail']}/>} />

            <Route path ='/listaProductos' exact  element={<ListaProductos
                                                                  data = {productInfo.products}
                                                                  header = {['id', 'name', 'description', 'category', 'detail']}/>} />            
                                                                                                                  
            <Route path ='/table' exact  element={<SearchMovies 
                                                            data = {userInfo.users}
                                                            header = {['id', 'nombre', 'email', 'detail']}/>} />

            <Route element={NotFound} />                          
      </Routes>

            {/* 
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/searchmovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch> 
            */}
    </>
  );
}



// PROP TYPES

SideBar.propTypes = {
      sideBar: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
};

SideBar.defaultProps = {
      sideBar: [
        {
          id: "default",
          title: "Default",
        },
      ],
};


