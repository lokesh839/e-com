import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import Darkmood from './Darkmood';
import { IoMdArrowDropdown } from "react-icons/io";


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",

    },
    {
        id: 3,
        name: "Kids ware",
        link: "/#",

    },
    {
        id: 3,
        name: "Mens ware",
        link: "/#",

    },
    {
        id: 3,
        name: "Electronics",
        link: "/#",

    },
];

const DropdownLinks = [

    {
        id: "1",
        name:" Trending product",
        link:"/#",
    },
   
    {   
        id:"2",
        name:"Best selling",
        link:"/#",

    },
    {  
        id:"3",
        name:"Top Reted",
        link:"/#",   
    }, 
 
    
    
];


const Navbar = () => {
    return (
        <div className=' shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* upare nav */}
            <div className=' bg-orange-300 py-2'>
                <div className=' container flex  justify-between items-center'>
                    <div>
                        <a href="#" className=' font-bold text-2xl sm:text-3xl flex gap-2'><img src="./images/icon.png" alt="logo" className='w-10 uppercase' />SK shoping
                        </a>
                    </div>
                    {/* search  bar */}
                    <div className=' flex justify-between items-center gap-4'>
                        <div className=' relative group hidden sm:block'>
                            <input type="text" placeholder='serach' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus: border-1 focus:border-orange-400' />
                            <IoSearchSharp className=' text-gray-500 group-hover:text-orange-300 absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>

                        {/* order button */}
                        <button onCanPlay={() => alert("ordering not available yet")} className=' bg-gradient-to-t from-orange-300 to-orange-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className=' group-hover:block hidden transition-all duration-200'>
                                Order
                            </span>
                            <FaCartArrowDown className=' text-xl text-white drop-shadow-sm cursor-pointer' />

                        </button>

                        {/* drak mood switch */}
                        <div>
                            {/* <Darkmood /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* low nav */}
            <div className=' flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className=' inline-block px-4 hover:text-orange-600 duration-200'>{data.name}</a>
                        </li>
                    ))}
                    <li className=' group  relative cursor-pointer'>
                        <a href="#" className=' flex items-center gap-[2px] py-2'>Trending <span>
                        <IoMdArrowDropdown  className=' transition-all duration-200 group-hover:rotate-180'/>

                        </span></a>
                        <div className=' absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                {DropdownLinks.map((data)=>(                                    
                                    <li key={data.id}>
                                        <a href={data.link} className=' inline-block w-full rounded-md p-2 hover:bg-orange-300'>{data.name}</a></li>                                   
                                    
                                ))

                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar