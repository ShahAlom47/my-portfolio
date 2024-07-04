
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";


const Navbar = () => {
    const [theme, setTheme] = useState(true);
    const [themData,setThemeData]=useState(null)
   



const [visible, setVisible] = useState(true);

useEffect(() => {
    let prevSPos = window.pageYOffset;

    const handleScroll = () => {
        const currentSPos = window.pageYOffset;
        const isVisible = prevSPos > currentSPos;

        setVisible(isVisible);
        prevSPos = currentSPos;

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [visible]);





useEffect(()=>{
    const themeData=  localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',JSON.parse(themeData) )
    setThemeData(JSON.parse(themeData))
    // setThemeValue(themData)
    
},[theme,themData,])

const themeControl = () => {      
    setTheme(!theme)
theme ?  localStorage.setItem('theme',JSON.stringify('dark')):localStorage.setItem('theme',JSON.stringify('light'))



}



const nav = <>
<li className="hover:text-color-p font-semibold"><a href="#home">Home</a></li>
<li className="hover:text-color-p font-semibold"><a href="#about">About</a></li>
<li className="hover:text-color-p font-semibold"><a href="#skill">Skill</a></li>
<li className="hover:text-color-p font-semibold"><a href="#project">Project</a></li>
<li className="hover:text-color-p font-semibold"><a href="#contact">Contact </a></li>

<label onClick={themeControl} className="flex cursor-pointer gap-2 items-center ml-3">

{
   themData==='light'? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
   
 :  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    
}

</label>


</>


 



    return (
        <div className={` border-b- shadow-md  bg-color-p bg-opacity-70  w-full m-auto" p-0  z-50 fixed  ${visible ? 'top-0 transition-all' : '-top-20 transition-all'} duration-1000`} >
        
            <div className="navbar p-0 max-w m-auto flex justify-between text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-40">
                            {nav}
                        </ul>
                    </div>
                   <Link><h1 className="text-lg text-white font-semibold ml-3">Shah Alom</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 navBar">
                        {nav}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;