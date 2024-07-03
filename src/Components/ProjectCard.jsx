

import  { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import PropTypes from 'prop-types'




const ProjectCard = ({data,idx}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }
    return (
        <div>
        
         
             <div key={data.id} className={` min-h-[500px] card card-compact bg-base-100 shadow-xl rounded-md `}
                        onMouseOver={() => handleMouseOver(idx)}
                        onMouseOut={handleMouseOut}
                    >
                        {/* ${idx % 4 === 0 || idx % 4 === 3 ? 'col-span-4 ' : 'col-span-2 '} */}
                        <figure className='relative  '>
                            <img
                                className='min-h-[250px]'
                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === idx ? 'scale(1.10)' : 'scale(1)' }}
                                src={data.projectImg} alt="Shoes" />
                            <div
                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(-125%)' : 'translateY(-0%)' }}
                                className="z-10 flex-1 absolute flex flex-row-reverse items-center -bottom-10 left-3 ">
                                <Link ><p className=' z-0 -ml-1 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md  px-2 rounded-r-sm font-semibold hover:text-red-700 text-black'>{data?.projectName}</p></Link>
                             
                            </div>
                            <div
                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(165%)' : 'translateY(-12%)' }}
                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-l-sm   p-1 pl-3  pr-8 text-lg z-10 absolute flex  items-center -top-5 right-0 ">
                               

                            </div>
                            <div
                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-r-sm   p-1 pr-3  pl-8  z-10 absolute flex  items-center top-5 left-0 ">
                             

                            </div>
                        </figure>
                    
                    </div>

                  
        </div>
    );
};

export default ProjectCard;
 ProjectCard.propTypes = {
    data: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,

  };
