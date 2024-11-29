import React from 'react'
import Slider from 'react-slick';
const TestimonialsData = [
    {
        id: 1,
        name: "victor",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_V_YVGKACctCOLmMnxKvRuG7vtABU5P2qQ&s",
    },
    {
        id: 2,
        name: "naveen",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70OE19DcZZWIWCjDVM_-Ogul79dn7E1Tdog&s",
    },
    {
        id: 3,
        name: "pavithra",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0uMSr7M7igLqDoyBbnzvM608YqqE2vUuyw&s   ",
    },
    {
        id: 4,
        name: "sowmi",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfOqaTGpKTZrA-U6hlAAP8Qo1WdMgSjMbjQ&s",
    },
];

const Testimonilas = () => {

    var settings = {

        dots: true,
        arrows: false,
        Infinite: true,
        speed: 500,
        sliderToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        caaEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    sliderToShow: 3,
                    sliderToScroll: 1,
                    Infinity: true,

                },
            },
            {
                breakpoint: 1024,
                settings: {
                    sliderToShow: 2,
                    sliderToScroll: 1,
                    initialSlide: 2,

                },

            },
            {
                breakpoint: 640,
                settings: {
                    sliderToShow: 1,
                    sliderToScroll: 1,


                },

            },
        ]

    }
    return (
        <div className='py-10 mb-10'>
            <div className=' container'>
                {/* header sction */}
                <div className=' text-center mb-10  max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className=' text-sm text-orange-400'> what are  customers are saying</p>
                    <h1 data-aos="fade-up" className=' text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className=' text-xs text-gray-400'>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                </div>
                {/* testimonials card */}
               
               <div data-aos='zoom-in'>
               <Slider {...settings}>{
                    TestimonialsData.map((data) => (
                        <div className='my-6'>
                            <div key={data.id} className=' flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-orange-400/10 relative'>
                                <div className=' mb-4'>
                                    <img src={data.img} alt="" className=' rounded-full w-20 h-20' />
                                </div>
                                <div className=' flex flex-col items-center gap-4'>
                                    <div className=' space-y-3'>
                                        <p className=' text-sm text-gray-400'>{data.text}</p>
                                        <h1 className=' text-xl font-bold  text-black/80 dark:text-light'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className=' text-black/20 text-9xl font-serif absolute top-0 right-0'>
                                    ,,
                                </p>
                            </div>
                        </div>

                    ))
                }

                </Slider>
               </div>

            </div>
        </div>
    )
}

export default Testimonilas