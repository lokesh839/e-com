import React from 'react'
import Img1 from '../../assets/shrit1.jpeg';
import Img2 from '../../assets/shrit2.jpeg';
import Img3 from '../../assets/shrit3.jpeg';
import Img4 from '../../assets/shrit4.jpeg';
import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
        id: 2,
        img: Img2,
        title: "printed shirt",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
        id: 3,
        img: Img4,
        title: "woman shirt",
        description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },


];

const TopProductes = () => {
    return (
        <div>
            <div className=' container'>
                {/* header section */}
                <div className=' text-left mb-28  '>
                    <p data-aos="fade-up" className=' text-sm text-orange-400'>Top Rated  Productes for you</p>
                    <h1 data-aos="fade-up" className=' text-3xl font-bold'> Best Products</h1>
                    <p data-aos="fade-up" className=' text-xs text-gray-400'>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                </div>

                {/* body section */}
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductsData.map((data) =>
                        <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black dark:hover:bg-orange-400  hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* images sction */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" className=' max-w-[140px] block mx-auto transform  -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                            </div>
                            {/* deatils sction */}
                            <div className='p-4  text-center'>
                                {/* sart rating */}
                                <div className=' w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className=' text-xl font-bold'>
                                    {data.title}
                                </h1>
                                <p className=' text-gray-500 group-hover:text-white  duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button className=' bg-orange-400 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-500'>
Order Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default TopProductes