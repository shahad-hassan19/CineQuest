import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Movies from './components/Movies/Movies';
import Series from './components/Series/Series.jsx'
import SearchMovie from './components/Movies/SearchMovie.jsx'
import MovieDetail from './components/Movies/MovieDetail';
import { movieLoader } from './components/Movies/movieLoader.js'
import { seriesLoader } from './components/Series/seriesLoader.js'
import SearchSeries from './components/Series/SearchSeries.jsx'
import SeriesDetail from './components/Series/SeriesDetail.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Movies/>} />   
      <Route path='/movie/' element={<Movies/>} />    
      <Route path='/series/' element={<Series/>} />
      <Route path='/search-movie/' element={<SearchMovie/>} />
      <Route path='/search-series/' element={<SearchSeries/>} />
      <Route loader={movieLoader} path='/movie-details/' element={<MovieDetail/>} />
      <Route loader={seriesLoader} path='/series-details/' element={<SeriesDetail/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)







