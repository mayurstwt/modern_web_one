import Image from 'next/image'
import React from 'react'

const HeroOne = () => {
    return (
        <div className='max-w-[95rem] mx-auto px-6 flex py-20 justify-center overflow-x-clip'>
            <div className="relative h-[40rem] md:h-[60rem] lg:h-[50rem]">
                <Image
                    className="h-full w-full object-cover rounded-4xl"
                    src="https://res.cloudinary.com/damr9jzpb/image/upload/v1740925617/66fedc3fd1f116089b632302_hero-img_oh0pmp.webp"
                    alt="Hero"
                />

                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start w-full absolute px-5 bottom-6'>
                    <div className="flex flex-col text-start">
                        <span className='text-[2.7rem] leading-13 md:text-6xl text-white font-bold'>We make your</span>
                        <span className='text-[2.7rem] leading-13 md:text-6xl text-white font-bold'>Life easy.</span>
                    </div>

                    <div>
                        <button className='bg-black text-white px-14 py-7 md:py-10 rounded-full leading-1 tracking-tight text-xl cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out'>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroOne

