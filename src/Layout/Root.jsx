import { Outlet } from "react-router-dom";
import Loading from "../SharedComponent/Loading";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';



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
        loading ? <Loading /> : 
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
          
                <Outlet />
            
        </motion.div>
    );
};

export default Root;