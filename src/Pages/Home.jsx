import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Components/Home/Hero.jsx'
import Navbar from "../Components/Home/Navbar.jsx"
import Quote from '../Components/Home/Quote.jsx'
import About from '../Components/Home/About.jsx'
import Why from '../Components/Home/Why.jsx'
const Home = () => {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])
  return (
<main className='min-w-screen-xl relative mx-auto'>

<section id="home" className='scroll-mt-[12vh]'>
<Hero/>
</section>
<Quote />
<About  />
<Why id="why"/>

</main>
)
}

export default Home