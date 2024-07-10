
import { useEffect, useState } from "react";
import { BiUserPin } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiCodeblocks } from "react-icons/si";

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Link } from "react-scroll";


const Navbar = () => {
const [visible, setVisible] = useState(true);
const [visibleName,setVisibleName]=useState(true);

useEffect(() => {
    let prevSPos = window.pageYOffset;

    const handleScroll = () => {
        const currentSPos = window.pageYOffset;
        const isVisible = prevSPos > currentSPos;
            console.log(currentSPos);
        setVisible(isVisible);
        prevSPos = currentSPos;
        if(currentSPos>100){
            setVisibleName(false)
        }
        else{
            setVisibleName(true)
        }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [visible]);





const [activeSection, setActiveSection] = useState('home');
console.log(
    activeSection
);

const handleSetActive = (to) => {
    setActiveSection(to);
};


const nav = (
    <>
        <li className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900   transform decoration-slice transition-colors duration-400 ${activeSection === 'home' ? 'active:bg-color-p' : ''}`}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Home"
                activeClass="active"
                onSetActive={() => handleSetActive('home')}
            >
                <IoHomeOutline />
            </Link>
        </li>
        <li className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === 'about' ? 'active:bg-color-p' : ''}`}>
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="About"
                activeClass="active"
                onSetActive={() => handleSetActive('about')}
            >
                <BiUserPin />
            </Link>
        </li>
        <li className={`hover:bg-color-p hover:text-black font-semibold text-lg rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === 'skill' ? 'active:bg-color-p ' : ''}`}>
            <Link
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Skill"
                activeClass="active"
                onSetActive={() => handleSetActive('skill')}
            >
                <SiCodeblocks />
            </Link>
        </li>
        <li className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === 'project' ? 'active:bg-color-p' : ''}`}>
            <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Project"
                activeClass="active"
                onSetActive={() => handleSetActive('project')}
            >
                <FaProjectDiagram />
            </Link>
        </li>
        <li className={`hover:bg-color-p hover:text-black font-semibold text-xl rounded-sm bg-slate-900 transition-colors duration-400 ${activeSection === 'contact' ? 'active:bg-color-p' : ''}`}>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Contact"
                activeClass="active"
                onSetActive={() => handleSetActive('contact')}
            >
                <RiContactsBook3Fill />
            </Link>
        </li>
    </>
);


 



    return (
        <div className={`  w-full m-auto" p-0  z-50 fixed top-20 `} >
        
            <div className="   p-0 m-auto flex flex-row lg:flex-col md:flex-col justify-start text-white">
                <div className="navbar-start flex items-center">
                    <div className="dropdown  fixed top-3 z-50 ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-40">
                            {nav}
                        </ul>
                    </div>
                   <Link><h1 className={`text-xl text-white font-bold ml-5  z-50 fixed md:left-0  lg:left-0 left-8  ${visibleName ? 'top-5 transition-all' : '-top-20 transition-all'} duration-1000 `} >Shah Alom</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex  ml-3 -mt-5 ">
                    <ul className="menu menu-horizontal px-1 navBar justify-center space-y-4 items-center  flex-col flex ">
                        {nav}
                    </ul>
                </div>
                
            </div>
            <Tooltip id="my-tooltip"  style={{color:'white', backgroundColor:'black',fontWeight:'bold'}}/>
        </div>
    );
};

export default Navbar;