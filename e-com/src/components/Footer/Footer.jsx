import React from 'react'
import Img01 from "../../../public/images/icon.png";
import Img02 from "../../assets/back1.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaMobile } from "react-icons/fa";






const BackImg = {
    backgroundImage: `url(${Img02})`,
    backgroundposition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },

]

const Footer = () => {
    return (
        <div style={BackImg} className=' text-white  mb-20'>
            <div className=' container'>
                <div data-aos='zoom-in' className=' grid md:grid-cols-3 pb-64 pt-5 '>
                    {/* company details  */}
                    <div className=' py-8 px-4'>
                        <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>SK Shoping</h1>
                        <img className=' max-w-[50px]' src={Img01} alt="" />
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    {/* footerLinks  */}
                    <div className=' grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className=' py-8 px-4'>
                                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Importent Link</h1>
                                <ul className=' flex flex-col gap-3'>{
                                    FooterLinks.map((link) => (
                                        <li className=' cursor-pointer hover:text-orange-500 hover:translate-x-1  duration-300 text-gray-200'>
                                            {link.title}
                                            {/* <span>{link.title}</span> */}
                                        </li>
                                    ))

                                }</ul>
                            </div>
                        </div>
                        <div>
                            <div className=' py-8 px-4'>
                                <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Link</h1>
                                <ul className=' flex flex-col gap-3'>{
                                    FooterLinks.map((link) => (
                                        <li className=' cursor-pointer hover:text-orange-500 hover:translate-x-1  duration-300 text-gray-200'>
                                            {link.title}
                                            {/* <span>{link.title}</span> */}
                                        </li>
                                    ))

                                }</ul>
                            </div>
                        </div>
                        {/* solical icon  */}

                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagramSquare className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="#">
                                    <IoLogoLinkedin className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className=' flex items-center gap-3'>
                                    <IoIosSend />
                                    <p>Noida,Tamilnadu</p>

                                </div><br />
                                <div className=' flex items-center gap-3'>
                                <FaMobile />

                                    <p> +91 9025916191</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer