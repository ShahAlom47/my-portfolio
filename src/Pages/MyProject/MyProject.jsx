import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/image/HONEST-Real-Estate.jpg'
import img2 from '../../assets/image/king-lion-hotel.jpg'
import img3 from '../../assets/image/Trek-trob.jpg'


const MyProject = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [sideData, setSideData] = useState(projectData[0])


    function handleMouseOver(index, data) {
        setHoveredIndex(index);
        setSideData(data)
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }
    return (
        <div id="project" className=" bg-stone-900 md:p-7 p-4 lg:p-10">
            <div className="max-w py-5">
                <div className="flex lg:flex-row gap-5 flex-col">
                    <div className=" lg:w-3/12 md:w-3/12 w-full   flex flex-col p-3 ">
                        <div className="mb-6">
                            <h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-white">MY LATESTS
                                PROJECT</h1>

                        </div>
                        <div className=" flex-1 bg-color-p  p-3 text-black ">
                            <h1 className=" text-lg font-bold mb-3 border-b-2 pb-2">{sideData.projectName}</h1>
                            <p className="">{sideData.projectDescription.slice(0, 100)}  ..... <Link><button className=" btn btn-link">Read More</button></Link></p>
                        </div>


                    </div>
                    <div className=" flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-4  ">
                        {
                            projectData.map((data, idx) => <div key={idx}>

                                <div key={data.id} className={` p-0  card card-compact bg-base-100 shadow-xl rounded-sm border-2 border-color-p  h-full`}
                                    onMouseOver={() => handleMouseOver(idx, data)}
                                    onMouseOut={handleMouseOut}
                                >

                                    <figure className='relative bg-black h-full '>
                                        <img
                                            className='min-h-[250px h-full opacity-50 bg-black'
                                            style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === idx ? 'scale(1.10)' : 'scale(1)' }}
                                            src={data.projectImg} alt="Shoes" />
                                        <div
                                            style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(-205%)' : 'translateY(-0%)' }}
                                            className="z-10 flex-1 absolute  -bottom-10 left-3 ">
                                            <div className=" flex justify-between">

                                                <Link ><p
                                                style={{ width: '120px', height: '25px' }}
                                                className=' btn-p z-0 -ml-1 backdrop-filter backdrop-blur-md  px-2 rounded-r-sm font-semibold text-white '>Details </p></Link>




                                            </div>

                                        </div>
                                        <div
                                            style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(-205%)' : 'translateY(-0%)' }}
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
                                            style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(165%)' : 'translateY(-12%)' }}
                                            className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-l-sm   p-1 pl-3  pr-8 text-lg z-10 absolute flex  items-center -top-5 right-0 ">


                                        </div>
                                        <div
                                            className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-r-sm   p-1 pr-3  pl-8  z-10 absolute flex  items-center top-5 left-0 ">
                                            <p className="font-bold">{data?.projectName}</p>


                                        </div>
                                    </figure>

                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;

const projectData = [
    {
        id: 1,
        projectName: 'HONEST Real Estate',
        projectImg: img1,
        projectLiveUrl: 'https://assignment-12-e88ce.web.app/',
        projectDescription: 'HONEST Real Estate is a modern web app for streamlined real estate transactions. Featuring secure authentication, Stripe payment integration, and role-based dashboards, built with React, Tailwind CSS, Firebase, and Node.js.',


    },
    {
        id: 2,
        projectName: 'King  Lion Hotel',
        projectImg: img2,
        projectLiveUrl: 'https://assignmet-11-jwt.web.app/',
        projectDescription: 'This hotel booking system enables users to seamlessly book rooms and manage reservations, supported by robust user authentication for security and ease of access.',


    },
    {
        id: 3,
        projectName: 'TrekTrove',
        projectImg: img3,
        projectLiveUrl: 'https://assaignment-10-with-server.web.app/',

        projectDescription: 'TrekTrove is a single-page website showcasing various tourist spots. Users can explore destinations, view spot details, and access additional information',


    }
]