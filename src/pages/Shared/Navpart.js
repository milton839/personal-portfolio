import React from 'react';

const Navpart = () => {
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
        <div className="py-10" style={navcolor}>
            <div className="container mx-auto text-white md:flex justify-between font-bold text-4xl cursor-pointer pl-4">
                <h2 className="md:pb-0 pb-4">MILTON</h2>
                <ul className="md:flex text-white items-center absolute md:static md:z-auto z-[-1] w-full md:w-auto">
                    {
                        navLinks.map((link) => (
                            <li key={link.link} className="md:pl-6 text-xl duration-700 hover:text-green-700 md:pb-0 pb-4">
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