import React from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
const About = () => {
  return (
<section id="about" className="container flex flex-col gap-20  min-h-[100vh]  min-w-xl-screen mx-auto py-10 scroll-mt-[12vh]">
    <div className="top w-full h-[10]   flex py-1 items-center justify-center"><h1 className='px-4 text-[1rem] py-1 font-semibold rounded-full border-2 border-black'>
        About</h1></div>
    <div className="info flex items-center justify-between w-full">
    <article className='w-full'>
    <h1 className='text-[2rem] w-1/2 text-zinc-600 '>Step Into the World of Diplomacy and Leadership</h1>
    <p className='text-[2.5rem] w-full mb-10' >Welcome to <Tooltip title="Know More" placement='top' arrow><Link to="/about"> <span  className='underline hover:text-blue-800 '>SVVVIMUN</span></Link> </Tooltip> – a platform where ideas transcend borders, voices inspire change, and the leaders of tomorrow rise to shape a better world. Here, every debate sparks innovation, every negotiation builds bridges, and every delegate becomes part of a global movement.</p>
    
    
    <p className='text-[2.5rem] w-full ' >Set against the prestigious backdrop of SVVV, this 3-day international conferencebrings together bright minds from across the globe. As a delegate, you won’t just represent nations – you’ll redefine perspectives, craft solutions, and lead conversations that echo beyond committee walls..</p>
 
   
    </article>

    </div>
    </section>
)
}

export default About