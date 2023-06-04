import { Routes, Route } from "react-router-dom"
import './App.css'
import Head from './Head'
import About from './About'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Head/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
  )
}

export default App
