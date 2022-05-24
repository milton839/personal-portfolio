import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';

const Navpart = () => {
    const [open, setOpen] = useState(false)
    const navcolor = {
        backgroundColor:'#152136'
    }
    const navLinks = [
        {name: 'HOME', link:"/"},
        {name: 'ABOUT', link:"/about"},
        {name: 'SERVICE', link:"/service"},
        {name: 'PORTFOLIO', link:"/portfolio"},
        {name: 'CONTACT', link:"/contact"},
    ]
    return (
        <div className="py-10 bg-indigo-800" >
            <div className="container mx-auto text-white md:flex justify-between font-bold text-4xl cursor-pointer pl-4">
                <h2 className="md:pb-0 pb-4">MILTON</h2>
                <div onClick={() => setOpen(!open)} className="text-4xl absolute right-8 top-11 cursor-pointer md:hidden border-2 border-white rounded">
                    {
                        open ? <AiFillCloseCircle /> : <AiOutlineMenu />
                    }
                </div>
                <ul className={`md:flex md:text-white text-indigo-500 md:bg-indigo-800 bg-white md:items-center absolute md:static  md:z-auto left-0 w-full md:w-auto md:mt-0 mt-4 md:pt-0 pt-4 md:pb-0 pb-4 transition-all duration-500 ease-in ${open ? "left-0 opacity-100": "left-[-490px] md:opacity-100 opacity-0"} md:border-0`}>
                    {
                        navLinks.map((link) => (
                            <li key={link.link} className="md:pl-6 pl-4 text-xl duration-700 hover:text-green-700 md:pb-0 pb-4">
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navpart;