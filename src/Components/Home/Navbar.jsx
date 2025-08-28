import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`w-full min-h-[10vh] px-14 backdrop-blur-2xl fixed z-50 flex items-center justify-between transition-colors duration-300 ${
      scrolled ? 'bg-white text-black' : 'bg-transparent text-white'
    }`}>
      <div className="logo rekative w-20 relative px-2">
      {scrolled ? 
     <img src="/black logo.png" className='h-full  w-full' alt="" />
     :
     <img src="https://svvvmun.netlify.app/assets/image-DU7gcQhu.png" className='h-full  w-full' alt="img" />

    }
      <div className="circle  h-full  w-1/2 bg-black"></div>
    </div>
      <div className="links flex gap-5 font-semibold">
      <Link to="/#home" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>Home</Link>
        <Link to="/#about" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>About</Link>
        <Link to="/" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>Committee</Link>
        <Link to="/" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>Secretariat</Link>
        <Link to="/" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>Contact Us</Link>
        <Link to="/" className='hover:text-xl hover:text-blue-500 transition-all duration-300'>Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
