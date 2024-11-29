import React from 'react'
import Img from '../../assets/woman1.jpeg';
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";







const Banner = () => {
  return (
    <div className=' min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className=' container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* images sction */}
          <div data-aos='zoom-in'>
            <img src={Img} alt="" className=' max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover ' />
          </div>
          {/* text detailsction */}
          <div className=' flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos='fade-up' className=' text-3xl sm:text-4xl font-bold'>Winnter Sale Upto 50% off</h1>
            <p data-aos='fade-up' className=' text-sm text-gray-500 tracking-wide leading-5'>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div className=' flex flex-col gap-4'>
              <div data-aos='fade-up'
               className=' flex items-center gap-4'>
                <GrSecure className=" text-4xl h-12  w-12 shadow-md p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos='fade-up'className=' flex items-center gap-4'>
                <TbTruckDelivery
                  className=' text-4xl h-12 w-12  shadow-sm p-4 rounded-full bg-orange-100 dark:border-r-orange-400' /> 
                <p>Fast Delivery</p>
              </div>
              <div data-aos='fade-up' className=' flex items-center gap-4'>
               <MdPayments className=' text-4xl h-12 w-12  shadow-sm p-4 rounded-full bg-orange-100 dark:border-r-green-400'/>
                <p>Eaye payment method</p>
              </div>
              <div data-aos='fade-up' className=' flex items-center gap-4'>
                <BiSolidOffer
                  className=' text-4xl h-12 w-12  shadow-sm p-4 rounded-full bg-orange-100 dark:border-r-yellow-400' />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner