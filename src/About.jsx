import {Link} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import About_bg from './assets/about_bg-min.jpg'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const About = () => {
  return (
    <>
      <Navbar/>
      <div style={{backgroundImage : `url(${About_bg})`}} className='h-screen w-screen text-3xl font-bold bg-center bg-cover pt-20'>
        <div className="mx-20 my-28 text-white">
          <h1>Hey, I'm <span className='text-[#ac01cb]'>Rehanul Haque</span><br />
          Web Developer & Designer
          </h1>
        </div>
        <div className="flex ml-20 text-white">
          <Link to="https://www.github.com/rehanulhaque" target='_blank' className='mr-4'><i><FaGithub/></i></Link>
          <Link to="https://www.linkedin.com/in/mdrehanulhaque1" target='_blank'><i><FaLinkedinIn/></i></Link>
          
        </div>
      </div>
    </>
  )
}

export default About
