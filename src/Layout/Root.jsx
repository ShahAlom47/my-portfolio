import { Outlet } from "react-router-dom";
import Loading from "../SharedComponent/Loading";
import { useEffect, useState } from "react";



const Root = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadData = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      };
  
      loadData();
    }, []);
  
    return (
        loading?<Loading></Loading>:<div>
            <Outlet></Outlet>
    
        
            
        </div>
    );
};

export default Root;