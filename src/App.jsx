
import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { TypeProvider } from "./context/useType"
import { Outlet } from 'react-router'

function App() {

  const [type, setType] = useState('movie')

  const findMovie = () => {
      setType('movie')
      localStorage.setItem('type', 'movie')
      document.querySelector('.movies-btn').classList.add('text-yellow-300')
      document.querySelector('.series-btn').classList.remove('text-yellow-300')
  }
  const findSeries = () => {
      setType('series')
      localStorage.setItem('type', 'series')
      document.querySelector('.series-btn').classList.add('text-yellow-300')
      document.querySelector('.movies-btn').classList.remove('text-yellow-300')
  }

  return (
      <TypeProvider value={{type, findMovie, findSeries}}>
        <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
      </TypeProvider>
  )
}

export default App
