import { useEffect, useState } from "react";
import { BiUserPin } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiCodeblocks } from "react-icons/si";

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Link } from "react-scroll";
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [visibleName, setVisibleName] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let prevSPos = window.pageYOffset;

        const handleScroll = () => {
            const currentSPos = window.pageYOffset;
            const isVisible = prevSPos > currentSPos;
            setVisible(isVisible);
            prevSPos = currentSPos;
            if (currentSPos > 100) {
                setVisibleName(false);
            } else {
                setVisibleName(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visible]);

    const [activeSection, setActiveSection] = useState('home');

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    const navItems = [
        { to: "home", icon: <IoHomeOutline />, label: "Home" },
        { to: "about", icon: <BiUserPin />, label: "About" },
        { to: "skill", icon: <SiCodeblocks />, label: "Skill" },
        { to: "project", icon: <FaProjectDiagram />, label: "Project" },
        { to: "contact", icon: <RiContactsBook3Fill />, label: "Contact" },
    ];
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    const navMenu = navItems.map((item, index) => (
        <motion.li
            key={item.to}
            custom={index}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={variants}
            className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === item.to ? 'bg-color-p' : ''}`}
        >
               <li
            key={item.to}
            className={`hover:bg-color-p p-0 hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === item.to ? 'bg-color-p' : ''}`}
        >
            <Link
            className={` rounded-sm bg-slate-900 transition-colors duration-800 `}
            style={{
                backgroundColor: activeSection === item.to ? '#aec600' : '',
                color: activeSection === item.to ? 'black' : '',
                transition: 'background-color 0.5s, color 0.5s',
            }}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={item.label}
                activeClass="active"
                onSetActive={() => handleSetActive(item.to)}
            >
                {item.icon}
            </Link>
        </li>
        </motion.li>
    ));


    const nav = navItems.map(item => (
        <li
            key={item.to}
            className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === item.to ? 'bg-color-p' : ''}`}
        >
            <Link
            className={` rounded-sm bg-slate-900 transition-colors duration-800 `}
            style={{
                backgroundColor: activeSection === item.to ? '#aec600' : '',
                color: activeSection === item.to ? 'black' : '',
                transition: 'background-color 0.5s, color 0.5s',
            }}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={item.label}
                activeClass="active"
                onSetActive={() => handleSetActive(item.to)}
            >
                {item.icon}
            </Link>
        </li>
    ));

    return (
        <div className={`w-full m-auto p-0 z-50 fixed top-20`}>
            <div className="p-0 m-auto flex flex-row lg:flex-col md:flex-col justify-start text-white">
                <div className="navbar-start flex items-center">
                    <div className="dropdown fixed top-3 z-40">
                        <div tabIndex={0} onClick={() => setIsMenuOpen(!isMenuOpen)} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow space-y-2 ${isMenuOpen?'bg-gray-400':''}  rounded-sm w-`}>
                            {navMenu}
                        </ul>
                        
                    </div>
                    <Link>
                        <h1 className={`text-xl text-white font-bold ml-5 z-50 fixed md:left-8 lg:left-0 left-8 ${visibleName ? 'top-5 transition-all' : '-top-20 transition-all'} duration-1000`}>
                            Shah Alom
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ml-3 -mt-5">
                    <ul className="menu menu-horizontal px-1 navBar justify-center space-y-4 items-center flex-col flex">
                        {nav}
                    </ul>
                </div>
            </div>
            <Tooltip id="my-tooltip" style={{ color: 'white', backgroundColor: 'black', fontWeight: 'bold' }} />
        </div>
    );
};

export default Navbar;
