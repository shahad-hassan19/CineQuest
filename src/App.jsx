
import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { TypeProvider } from "./context/useType"
import { Outlet } from 'react-router'

function App() {

  const [type, setType] = useState('movie')

  const findMovie = () => {
      setType('movie')
  }
  const findSeries = () => {
      setType('series')
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
