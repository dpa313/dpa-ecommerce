import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
const Hero = () => {
    const slides = [
        {
            url: "https://images.pexels.com/photos/17147751/pexels-photo-17147751/free-photo-of-close-up-of-a-mens-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url: "https://images.pexels.com/photos/7209315/pexels-photo-7209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url: "https://images.pexels.com/photos/9978721/pexels-photo-9978721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url: "https://images.pexels.com/photos/1075189/pexels-photo-1075189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? 3 : (prev) => prev -1)
    }
    const nextSlide = () => {
        setCurrentIndex(currentIndex === 3 ? 0 : (prev) => prev +1)
    }
  return (
    <div className='relative z-2 max-w-[1180px] h-[360px] m-auto py-2 group'>
        <div 
            style={{backgroundImage:`url(${slides[currentIndex].url})`}} 
            className="w-full h-full bg-center bg-cover rounded-md duration-500"
        ></div>
        <div className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-2 p-1 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-2 p-1 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
    </div>
  )
}

export default Hero