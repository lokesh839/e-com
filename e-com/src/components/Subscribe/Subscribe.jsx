import React from 'react'
import Back from '../../assets/back.webp';

const BannerImgn = {
    backgroundImage: `url(${Back})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

}

const Subscribe = () => {
    return (
        <div data-aos='zoom-in' className=' mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImgn}>
            <div className=' container backdrop-blur-sm py-10'>
                <div className=' space-y-6 max-w-xl mx-auto'>
                    <h1 className=' text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get notified About new Products</h1>
                    <input data-aos='fade-up' type="text" placeholder='enter your email' className='w-full p-3' />
                </div>
            </div>
        </div>
    )
}

export default Subscribe