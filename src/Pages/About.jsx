import React from 'react'
import FlipLink from "@/Components/ui/text-effect-flipper"

const About = () => {
  return (
    <main className='w-full  bg-black  min-h-screen mx-auto'>
        <section className=' mx-auto text-[10rem] flex items-center text-white justify-center max-w-screen-xl bg-black h-[100vh]'>
        <FlipLink className=""><h1 className=''>About Us</h1></FlipLink>
        </section>
    </main>
)
}

export default About