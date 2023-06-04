import React from 'react'
import Navbar from './components/Navbar'
import MAIN_BG from './assets/main-bg-min.jpg'
import Home from './Home'

const Head = () => {
  return (
    <main style={{backgroundImage: `url('${ MAIN_BG }')`}} className='bg-center bg-cover h-screen w-screen relative flex justify-center items-center'>
    <Navbar/>
    <Home/>
    </main>
  )
}

export default Head
