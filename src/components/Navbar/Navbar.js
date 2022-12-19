import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
    const [transparent, setTransparent] = useState(true);
    const navbarRef = useRef(null);
    const changeColor = () => {
        if (navbarRef.current.scrollTop > 80) {
            setTransparent(false);
        } else {
            setTransparent(true)
        }
    }
    const navItems = [
        {
            title: "Home",
            link: "/",
            icon: null
        },
        {
            title: "Saves",
            link: "/saves",
            icon: null
        },
        {
            title: "Favorites",
            link: "/favorites",
            icon: null
        }
    ]
    const navStyle = transparent ? { background: "transparent" } : { background: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(5px)" }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div ref={navbarRef} onScroll={changeColor} className="drawer-content flex flex-col">
                <div style={navStyle} className={`w-full duration-300 navbar z-50 container mx-auto fixed top-0`}>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to={"/"} className="flex-1 px-2 mx-2 font-satisfy font-bold text-3xl">CM<span className='text-primary'>A</span></Link>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {
                                navItems.map((n, index) => <li className='hover:bg-green-500 hover:text-white duration-500 ml-5 rounded-md' key={index}><Link to={n.link}>{n.title}</Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {
                        navItems.map((n, index) => <li key={index}><Link to={n.link}>{n.title}</Link></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;