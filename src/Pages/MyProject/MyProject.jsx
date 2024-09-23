import { useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../../../public/projectData";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const MyProject = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [sideData, setSideData] = useState(projectData[0]);
    const [readMore, setReadMore] = useState(false);

    // State for pagination
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectsPerPage = 3; // Display 3 projects at a time

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

    // Handle Next and Prev buttons
    const handleNext = () => {
        if (currentIndex + projectsPerPage < projectData.length) {
            setCurrentIndex(currentIndex + 1); // Move one item ahead
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Move one item back
        }
    };

    return (
        <div ref={ref} id="project" className="bg-black-p md:p-7 p-4 lg:p-10 lg:pl-16 md:pl-16">
            <Element name="project">
                <div className="max-w py-5">
                    <div className="flex lg:flex-row gap-5 flex-col">
                        <div className="lg:w-3/12 w-full flex flex-col p-3">
                            <div className="mb-6">
                                <h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-white">MY LATEST PROJECTS</h1>
                            </div>
                            <div className="flex-1 bg-color-p p-3 text-black">
                                <h1 className="text-lg font-bold pb-2">{sideData.projectName}</h1>
                                <div className={`bg-black pb-4 animated-line ${inView ? 'animate' : ''}`} />
                                <p className="">
                                    {readMore ? sideData.projectDescription : `${sideData.projectDescription.slice(0, 100)}.........`}  
                                    <button onClick={() => setReadMore(!readMore)} className="text-blue-600 underline font-semibold mt-0 pt-0">
                                        {readMore ? 'Read Less' : 'Read More'}
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-4">
                            {projectData.slice(currentIndex, currentIndex + projectsPerPage).map((data, index) => (
                                <div
                                    key={data.id}
                                    style={{
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? 'translateY(0)' : 'translateY(50px)',
                                        transition: `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`,
                                    }}
                                >
                                    <div
                                        className={`p-0 card card-compact bg-base-100 shadow-xl rounded-sm border-2 border-color-p h-full`}
                                        onMouseOver={() => handleMouseOver(index, data)}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <figure className="relative bg-black h-full">
                                            <img
                                                className="min-h-[250px] h-full opacity-50 bg-black"
                                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === index ? 'scale(1.10)' : 'scale(1)' }}
                                                src={data.projectImg}
                                                alt={data.projectName}
                                            />
                                            <div
                                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-170%)' : 'translateY(20%)' }}
                                                className="z-10 flex-1 flex justify-between absolute -bottom-10 left-0  w-full"
                                            >
                                                <div className="inline ">
                                                    <Link to={`/project/details/${data.id}`}>
                                                        <p 
                                                        style={{width:'100px',height:"28px"}}
                                                        className="btn-p z-0 -ml-1 backdrop-filter backdrop-blur-md px-2 rounded-r-sm font-semibold text-white">Details</p>
                                                    </Link>
                                                </div>
                                                <div className="inline">
                                                    <a href={data.projectLiveUrl} target="_blank" rel="noopener noreferrer">
                                                        <p 
                                                        style={{width:'100px',height:"28px"}}
                                                        className="z-0 -ml-1 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md px-2 rounded-r-sm font-semibold btn-p text-black">
                                                            Live Preview
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <div
                                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === index ? 'translateY(-205%)' : 'translateY(0)' }}
                                                className="z-10 flex-1 absolute -bottom-10 right-3"
                                            >
                                                <div className="flex justify-between">
                                                    <a href={data.projectLiveUrl} target="_blank" rel="noopener noreferrer">
                                                        <p className="z-0 -ml-1 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md px-2 rounded-r-sm font-semibold btn-p text-black">
                                                            Live Preview
                                                        </p>
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div
                                                className="bg-white bg-opacity-80 text-black backdrop-filter backdrop-blur-md rounded-r-sm p-1 pr-3 pl-8 z-10 absolute flex items-center top-5 left-0"
                                            >
                                                <p className="font-bold">{data?.projectName}</p>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-6">
                        <button
                            className={`px-4 py-2 mx-2 bg-gray-500 text-white rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            Prev
                        </button>
                        <button
                            className={`px-4 py-2 mx-2 bg-gray-500 text-white rounded ${currentIndex + projectsPerPage >= projectData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex + projectsPerPage >= projectData.length}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default MyProject;
