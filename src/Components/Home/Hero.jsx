import React from 'react'
import { ImageCursorTrail } from "../ui/image-cursortrail"

const Hero = () => {
    const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]
  return (
    <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-35 select-none sm:h-48 h-40  "
        className=" max-w-xl-screen bg-black h-screen  "
        >
          <article className="relative z- flex flex-col  ">
        <div className="head w-fit h-fit ">
              <h1 className=" text-center text-[25rem] font- text-white select-none font-normal font-[roboto] tracking-tight ">
IMUN            </h1>
        </div>
            <h1 className="  absolute text-[7rem] font- text-white bottom-6 right-4 select-none font-normal tracking-tight ">
2025            </h1>
          </article>
    </ImageCursorTrail>
  )
}

export default Hero