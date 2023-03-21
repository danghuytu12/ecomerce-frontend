/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = () => {
    return (
        <section className="relative overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 lg:w-2/5 md:h-128 md:pr-8 mb-20 md:mb-0">
                        <div className="pt-20 max-w-md">
                            <span className="mb-4 text-2xl">More ideas</span>
                            <h2 className="mt-6 mb-16 lg:mb-32 text-5xl font-bold font-heading">Featured styles. Check it now.</h2>
                            <a className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200" href="#">More</a>
                        </div>
                    </div>
                    <div className="w-full h-64 md:h-128 md:w-1/2 lg:w-3/5">
                        <img className="h-full w-full md:w-auto max-w-none object-cover" src="yofte-assets/images/placeholder-marta-wave.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner