import React from 'react'
import FlipLink from '@/Components/ui/text-effect-flipper'
const Why = () => {
  return (
    <section className="container max-w-xl-screen mx-auto min-h-screen mt-25 text-center flex flex-col  justify-start ">
  <div className=" px-4      ">

   <FlipLink className=""> <h1 className=' '>#Why SVVVIMUN?</h1></FlipLink>

  </div>
    {/* <ul className='text-[2.7rem] font-normal'>
        <li>✔️Engage in intellectual debates on real-world issues</li>
        <li>✔️Experience the thrill of diplomatic negotiations</li>
        <li>✔️Network with visionaries and changemakers</li>
        <li>✔️Unlock your potential to become a global leader</li>
    </ul> */}
    <div className="section w-full h-auto cursor-pointer mt-10">
        <div className="first w-full relative group   flex items-center px-10 h-[20vh] ">
            <h1 className='text-[3rem] group-hover:text-white transiton-all z-20'><span className='opacity-0 group-hover:opacity-100 transition-all duration-200'>✔️</span>Engage in intellectual debates on real-world issues</h1>
            <div className="absolute rounded-full overlay w-full left-0  bg-black transition-all duration-400 group-hover:h-full h-0    z-10 "></div>    
        </div>
        <div className="first w-full relative group   flex items-center px-10 h-[20vh] ">
            <h1 className='text-[3rem] group-hover:text-white transiton-all z-20'><span className='opacity-0 group-hover:opacity-100 transition-all duration-200'>✔️</span>Experience the thrill of diplomatic negotiations</h1>
            <div className="absolute rounded-full overlay w-full left-0  bg-black transition-all  duration-400 group-hover:h-full h-0    z-10 "></div>    
        </div>
        <div className="first w-full relative group   flex items-center px-10 h-[20vh] ">
            <h1 className='text-[3rem] group-hover:text-white transiton-all z-20'><span className='opacity-0 group-hover:opacity-100 transition-all duration-200'>✔️</span>Network with visionaries and changemakers</h1>
            <div className="absolute rounded-full overlay w-full left-0  bg-black transition-all  duration-400 group-hover:h-full h-0    z-10 "></div>    
        </div>
        <div className="first w-full relative group   flex items-center px-10 h-[20vh] ">
            <h1 className='text-[3rem] group-hover:text-white transiton-all z-20'><span className='opacity-0 group-hover:opacity-100 transition-all duration-200'>✔️</span>Unlock your potential to become a global leader</h1>
            <div className="absolute rounded-full overlay w-full left-0  bg-black transition-all  duration-400 group-hover:h-full h-0    z-10 "></div>    
        </div>
    </div>
</section>  )
}

export default Why