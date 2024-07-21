import { Link, useNavigate, useParams } from "react-router-dom";
import { projectData } from "../../../public/projectData";

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = projectData.find(data => data.id === parseInt(id));

    const handleNavigation = (sectionName) => {
        navigate(`/#${sectionName}`);
    };

    const nav = <>
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('about')}>About</button>
        <button onClick={() => handleNavigation('skill')}>Skill</button>
        <button onClick={() => handleNavigation('project')}>Project</button>
        <button onClick={() => handleNavigation('contact')}>Contact</button>
    </>;

    return (

        <div className="bg-black-p lg:pl-14 md:pl-12">
            <div className="max-w py-10">
                <div className={` border-b- shadow-md   w-full m-auto" p-0  z-50 bg-slate-500  `} >

                    <div className="navbar   p-0 max-w m-auto flex justify-between text-white">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-40">
                                    {nav}
                                </ul>
                            </div>
                            <Link><h1 className="text-lg text-white font-bold ml-3">Shah Alom</h1></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 navBar space-x-5 font-bold">
                                {nav}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className=" text-white flex gap-4 lg:flex-row md:flex-row flex-col">

                    <div className="p-4">

                        <img src={data.projectImg} alt="" />
                    </div>


                    <div className=" p-4">
                        <h1 className="text-2xl border-b-2 pb-2 mb-4">{data.projectName}</h1>
                        <p className="">{data.projectDescription}</p>

                        <div className="my-4">
                            <h1 className=" text-xl font-bold">Features:</h1>
                            {data.Features.map((data, index) => <p key={index} > {data}</p>)}
                        </div>
                        <div className="my-4">
                            <h1 className=" text-xl font-bold"> Technologies</h1>
                            {data.Technologies.map((data, index) => <p key={index} > {data}</p>)}
                        </div>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default Details;