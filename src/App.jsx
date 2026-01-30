import React from 'react'
import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NavBar from './component/NavBar';
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    
    <MovieProvider >
      <div>
        <NavBar />
      </div>
   <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
   </main>
   </MovieProvider>
   
  )
}


export default App


