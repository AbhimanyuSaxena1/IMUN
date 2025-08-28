import React from 'react'

const Quote = () => {
  return (
    <section className='max-w-screen-xl mx-auto min-h-[100vh]  '>
        <div className="container py-10 flex gap-10 items-center justify-between ">
            <article className="left  w-1/2">
                <p className='text-[4rem] leading-none '>Discover the Leader Within You as You Navigate the Art of Diplomacy and the Power of Ideas. At Our MUN, Delegates Don’t Just Debate — They Create Solutions, Build Friendships, and Shape the Future of Tomorrow’s World.</p>
            </article>
            <div className="right sticky top-20  w-1/2">
                <img src="parliament.webp" className='h-full w-full object-cover' alt="" />
            </div>
        </div>
    </section>
)
}

export default Quote