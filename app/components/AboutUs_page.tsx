"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const AboutUs_page = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => console.error("Autoplay failed:", error));
        }
    }, []);

    return (
        <div className="px-6 py-20 max-w-[95rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                <div className="flex h-[40rem] overflow-hidden rounded-4xl">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src="https://res.cloudinary.com/damr9jzpb/video/upload/v1738861286/1350205-hd_1280_720_30fps_nkofmq.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="border-4 px-5 border-black rounded-4xl">
                    <h2 className="text-6xl mt-7 mb-20 font-extrabold">Why us ?</h2>
                    <p className="text-[1.3rem] leading-7 mb-28 max-w-[25rem] font-[550] text-gray-800 tracking-normal">
                        We have the ability to go wherever our clients need, delivering in over 15 states, and Our team is composed of the best and brightest in the industry.
                    </p>
                    <div className="grid grid-cols-1 pb-6 md:grid-cols-2 gap-4 md:pb-8 lg:pb-0">
                        <div className="bg-gray-100 h-[13rem] p-5 rounded-4xl">
                            <Image src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322b8/66fedc3fd1f116089b632300_mark.svg"} alt="why_us_image_1" height={100} width={100} className="h-6 w-6" />
                            <p className="font-bold text-[1.3rem] mt-3">Service excellence</p>
                            <p className="mt-10">We approach construction differently, delivering value beyond our client’s expectations.</p>
                        </div>
                        <div className="bg-gray-100 p-5 rounded-4xl">
                            <Image src={"https://cdn.prod.website-files.com/66fedc3fd1f116089b6322b8/66fedc3fd1f116089b632300_mark.svg"} alt="why_us_image_1" height={100} width={100} className="h-6 w-6" />
                            <p className="font-bold text-[1.3rem] mt-3">Relationship-driven</p>
                            <p className="mt-10">We employ an open and collaborative approach with our partners.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-4 h-[90rem] md:h-[40rem] rounded-2xl border border-black overflow-hidden">
                <img
                    src="https://cdn.prod.website-files.com/66fedc3fd1f116089b6322b8/66fedc3fd1f116089b6322ff_overview-img.webp"
                    alt="Background"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/15 to-black/15"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full p-3">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex flex-col leading-[4rem]">
                            <span className="text-white text-[3.5rem] font-[900]">We succeed</span>
                            <span className="text-white text-[3.5rem] font-[900]">with teamwork.</span>
                        </div>
                        <div>
                            <button className="px-14 py-7 rounded-full cursor-pointer bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out">
                                About
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full p-3">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gradient bg-black/50 border border-orange-500 h-[13rem] p-5 rounded-4xl">
                            <p className="font-bold text-[3rem] text-white">#1</p>
                            <p className="mt-10 text-[1.2rem] font-[500] text-orange-600 tracking-wide">Retail Contractor</p>
                            <p className="text-[1rem] font-[300] text-gray-200 mt-1 tracking-wide">by ENR New York in 2024</p>
                        </div>
                        <div className="bg-gradient bg-black/50 border border-orange-500 h-[13rem] p-5 rounded-4xl">
                            <p className="font-bold text-[3rem] text-white">100</p>
                            <p className="mt-10 text-[1.2rem] font-[500] text-orange-600 tracking-wide">Best Places to Work</p>
                            <p className="text-[1rem] font-[300] text-gray-200 mt-1 tracking-wide">by Crain's New York in 2024</p>
                        </div>
                        <div className="bg-gradient bg-black/50 border border-orange-500 h-[13rem] p-5 rounded-4xl">
                            <p className="font-bold text-[3rem] text-white">#5</p>
                            <p className="mt-10 text-[1.2rem] font-[500] text-orange-600 tracking-wide">Top 80 Retails Giants</p>
                            <p className="text-[1rem] font-[300] text-gray-200 mt-1 tracking-wide">by BD+C Magazine in 2024</p>
                        </div>
                        <div className="bg-gradient bg-black/50 border border-orange-500 h-[13rem] p-5 rounded-4xl">
                            <p className="font-bold text-[3rem] text-white">Gold</p>
                            <p className="mt-10 text-[1.2rem] font-[500] text-orange-600 tracking-wide">National Safety Award</p>
                            <p className="text-[1rem] font-[300] text-gray-200 mt-1 tracking-wide">by ABC in 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs_page;