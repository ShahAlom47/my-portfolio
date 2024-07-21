import {  useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../../../public/projectData";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const MyProject = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [sideData, setSideData] = useState(projectData[0]);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    function handleMouseOver(index, data) {
        setHoveredIndex(index);
        setSideData(data);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }

    return (
        <div ref={ref} id="project" className=" bg-black-p md:p-7 p-4 lg:p-10  lg:pl-16 md:pl-16">
            <Element name="project">
                <div className="max-w py-5">
                    <div className="flex lg:flex-row gap-5 flex-col">
                        <div className=" lg:w-3/12 md:w-3/12 w-full   flex flex-col p-3 ">
                            <div className="mb-6">
                                <h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-white">MY LATESTS
                                    PROJECT</h1>
                            </div>
                            <div className=" flex-1 bg-color-p  p-3 text-black ">
                                <h1 className=" text-lg font-bold  pb-2">{sideData.projectName}</h1>
                                <div className={` bg-black  pb-4 animated-line ${inView ? 'animate' : ''}`} />
                                <p className="">{sideData.projectDescription.slice(0, 100)}  ..... <Link><button className=" btn btn-link">Read More</button></Link></p>
                            </div>
                        </div>
                        <div className=" flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-4  ">
                            {projectData.map((data, index) => (
                                <div
                                    key={data.id}
                                    style={{
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? 'translateX(0)' : 'translateX(50px)',
                                        transition: `opacity 0.5s ease ${index * 0.2}s, transform 20s ease ${index * 0.2}s`,
                                    }}
                                >
                                    <div
                                        className={` p-0  card card-compact bg-base-100 shadow-xl rounded-sm border-2 border-color-p  h-full`}
                                        onMouseOver={() => handleMouseOver(index, data)}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <figure className='relative bg-black h-full '>
                                            <img
                                                className='min-h-[250px h-full opacity-50 bg-black'
                                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'scale(1.10)' : 'scale(1)' }}
                                                src={data.projectImg} alt="Shoes" />
                                            <div
                                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-205%)' : 'translateY(-0%)' }}
                                                className="z-10 flex-1 absolute  -bottom-10 left-3 ">
                                                <div className=" flex justify-between">
                                                    <Link to={`/project/details/${data.id}`}><p
                                                        style={{ width: '120px', height: '25px' }}
                                                        className=' btn-p z-0 -ml-1 backdrop-filter backdrop-blur-md  px-2 rounded-r-sm font-semibold text-white '>Details </p></Link>
                                                </div>
                                            </div>
                                            <div
                                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-205%)' : 'translateY(-0%)' }}
                                                className="z-10 flex-1 absolute  -bottom-10 right-3 ">
                                                <div className=" flex justify-between">
                                                    <a href={data.projectLiveUrl} target="_blank">
                                                        <p style={{ width: '120px', height: '25px' }} className="z-0 -ml-1 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md px-2 rounded-r-sm font-semibold btn-p text-black">
                                                            Live Preview
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(165%)' : 'translateY(-12%)' }}
                                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-l-sm   p-1 pl-3  pr-8 text-lg z-10 absolute flex  items-center -top-5 right-0 ">
                                            </div>
                                            <div
                                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-r-sm   p-1 pr-3  pl-8  z-10 absolute flex  items-center top-5 left-0 ">
                                                <p className="font-bold">{data?.projectName}</p>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default MyProject;
