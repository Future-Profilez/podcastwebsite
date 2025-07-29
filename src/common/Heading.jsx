import React from 'react'

export default function Heading({ title, content }) {
    return (

        <div className="text-center ">

            <h1 className="text-[36px] sm:text-[44px] md:text-[55px] font-bold mb-4 text-center text-white font-inter">
                {title}
            </h1>
            <p className="text-center text-[15px] sm:text-[16px] md:text-[18px] mb-8 text-white/80 font-inter max-w-5xl mx-auto">
                {content}
            </p>
        </div>
    )
}
