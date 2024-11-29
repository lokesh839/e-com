import React from 'react'
import Img1 from "../../assets/woman1.jpeg";
import Img2 from "../../assets/woman2.jpeg";
import Img3 from "../../assets/woman3.jpeg";
import Img4 from "../../assets/woman4.jpeg";
import Img5 from "../../assets/woman5.jpeg";
import { FaStar } from "react-icons/fa6";



const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",

    },
    {
        id: 2,
        img: Img2,
        title: "Women Ethnic",
        rating: 4.5,
        color: "red",
        aosDelay: "200",

    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",

    },
    {
        id: 4,
        img: Img4,
        title: "printed T-Shirt",
        rating: 4.5,
        color: "yellow",
        aosDelay: "600",

    },
    {
        id: 5,
        img: Img5,
        title: "Fashin T-Shirt",
        rating: 5.0,
        color: "pink",
        aosDelay: "800",

    },

];

const Productes = () => {
    return (
        <div className=' mt-14 mb-12'>
            <div className=' container'>
                {/* heder sction */}
                <div className=' text-center mb-10  max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className=' text-sm text-orange-400'>Top Selling Productes for you</p>
                    <h1 data-aos="fade-up"className=' text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className=' text-xs text-gray-400'>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                </div>
                {/* body sction */}
                <div>
                    <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* card section */}
                        {
                            ProductsData.map((data) => (
                                <div data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={data.id} className=' space-y-3'>
                                    <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                                    <div>
                                        <h3 className=' font-semibold'>{data.title}</h3>
                                        <p className=' text-sm text-gray-600'>{data.color}</p>
                                        <div className=' flex items-center gap-1'>
                                            <FaStar className=' text-yellow-500' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* view all button */}
                    <div className=' flex justify-center'>
                        <button className='  text-center mt-10 cursor-pointer bg-orange-400 text-white py-1 px-4  rounded-md'>view all</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productes