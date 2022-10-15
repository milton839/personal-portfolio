import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const allMenu = [
        { name: 'Home', link:'/home'},
        { name: 'About', link:'/about'},
        { name: 'Services', link:'/services'},
        { name: 'Portfolio', link:'/portfolio'},
        { name: 'Contact', link:'/contact'},
    ]
    return (
        <div>
            <ul>
                <li>
                    
                    {
                        allMenu.map(menu => <Link key={menu.link} to={menu.link}>{menu.name}</Link>)
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;