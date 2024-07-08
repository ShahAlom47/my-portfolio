import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="bg-black-p ">
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
        
            
        </div>
    );
};

export default Root;