import React from 'react'
import Slider from "react-slick"
import Images01 from "../../assets/Images01.webp";
import Images02 from "../../assets/Images02.jpeg";
import Images03 from "../../assets/Images03.avif";



const ImageList = [
    {
        id: 1,
        img: Images01,
        title: " upto 50% off on all mens's wear",
        description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        img: Images02,
        title: "  30% off on all woman's wear",
        description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 3,
        img: Images03,
        title: " upto 70% off on all product sale",
        description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];

const Hero = () => {

    var settings = {

        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToscrooll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,

    };
    return (
        <div className=' relative overflow-hidden m-h-[550px]  sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* background  */}
            <div className='h-[700px]  w-[700px] bg-orange-300 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

            </div>
            {/* hero section */}
            <div className=' container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data) =>
                        <div>
                            <div className=' grid grid-cols-1 sm:grid-cols-2'>
                                {/* txet content */}
                                <div className=' flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                                    className=' text-3xl sm:text-4xl lg:text-5xl font-bold '>
                                        {data.title}
                                    </h1>
                                    <p  data-aos="fade-up" data-aos-duration="500" data-aos-daley="100" className=' text-sm'>
                                        {data.description}
                                    </p>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-daley="300">
                                        <button className=' bg-gradient-to-r from-orange-400  to-orange-300 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* images sction */}
                                <div className=' order-1 sm:oredr-2 ml-12'>
                                    <div className=' relative z-10'>
                                        <img src={data.img} alt="" className=' w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain max-auto ' />
                                    </div>
                                </div>

                            </div>

                        </div>
                    )}

                </Slider>

            </div>
        </div>
    )
}

export default Hero