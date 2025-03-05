import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Features_page = () => {
    return (
        <div className='container max-w-7xl py-20 '>
            <p className='text-[2rem] md:text-[2.6rem] tracking-tight font-[500] leading-12 md:leading-14 text-black max-w-4xl'>
                We are builders. Our passion for construction is at the heart of everything we do. We build spaces for scientists to research cures, for students to learn and grow, for companies to innovate, and for locals to live healthier. Our work helps transform communities.
            </p>

            <div className='mt-32'>
                <p className='flex border-t border-gray-300 pt-10 gap-3 text-3xl font-[600]'>
                    <FaArrowRight className='h-10 w-10' />
                    Featured projects
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-5 mt-8'>
                    <div className='relative'>
                        <Image className='w-full h-full rounded-[2rem]' alt='card_1' height={1000} width={1000} src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63235b_project-thumb-03.webp"} />
                        <p className='absolute top-3 left-3 font-[500] bg-white rounded-2xl px-4 py-2 tracking-tight text-[0.8rem]'>Los Angeles, CA</p>
                        <p className='pl-5 font-[600] text-[1.4rem] mt-2'>B192 Space Tower</p>
                    </div>

                    <div className='relative'>
                        <Image className='w-full h-full rounded-[2rem]' alt='card_1' height={1000} width={1000} src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63231b_project-thumb-02.webp"} />
                        <p className='absolute top-3 left-3 font-[500] bg-white rounded-2xl px-4 py-2 tracking-tight text-[0.8rem]'>Los Angeles, CA</p>
                        <p className='pl-5 font-[600] text-[1.4rem] mt-2'>1649 Atlas Tower</p>
                    </div>

                    <div className='relative'>
                        <Image className='w-full h-full rounded-[2rem]' alt='card_1' height={1000} width={1000} src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b632364_project-thumb-04.webp"} />
                        <p className='absolute top-3 left-3 font-[500] bg-white rounded-2xl px-4 py-2 tracking-tight text-[0.8rem]'>Los Angeles, CA</p>
                        <p className='pl-5 font-[600] text-[1.4rem] mt-2'>Grand Musique Hotel</p>
                    </div>

                    <div className='relative'>
                        <Image className='w-full h-full rounded-[2rem]' alt='card_1' height={1000} width={1000} src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63236b_project-thumb-08.webp"} />
                        <p className='absolute top-3 left-3 font-[500] bg-white rounded-2xl px-4 py-2 tracking-tight text-[0.8rem]'>Los Angeles, CA</p>
                        <p className='pl-5 font-[600] text-[1.4rem] mt-2'>72 Lancing</p>
                    </div>
                </div>

                <div className='flex justify-center mt-20'>
                    <button className='border border-gray-300 px-14 cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out py-7 rounded-full'>All Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Features_page