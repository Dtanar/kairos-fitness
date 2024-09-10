import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className="flex flex-col gap-4">
                <p className='uppercase'>Time to supersize your muscles!</p>

                <h1 className='uppercase font-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl'>Kai<span className='text-cyan-300'>ros-Noxi</span>mus
                </h1>
            </div>

            <p className='text-sm md:text-base font-light'>"<span className='text-cyan-300'>Unleash your inner strength!</span> Our gym features <span className='italic font-medium'>Cutting-Edge Tech, High-Energy Classes, and Specialized Training Programs. Enjoy 24/7 Access, Expert Coaching, and a Motivational Community</span> that will help you <span className='text-cyan-300'>Sweat Smarter</span> and <span className='text-cyan-300'>Achieve More</span>."</p>

            <Button function={() => {
                window.location.href = '#generate'
            }} text = {'Accept & Begin'} />
        </div>
    )
}
