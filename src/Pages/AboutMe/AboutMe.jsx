import { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../../assets/image/my-photo.png';
import { LiaSchoolSolid } from 'react-icons/lia';
import { useInView } from 'react-intersection-observer';


const AboutMe = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const { ref, inView,} = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const text = `Welcome to my portfolio! I am Shah Alom, a Creative Front-End Developer with a passion for building user-friendly and innovative websites and applications. Web development is not just a profession for me it's a dream, a passion, and an emotion that drives me every day. With a strong foundation in HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js, Firebase, and MongoDB, I bring my creative visions to life through clean, efficient, and engaging code. My journey into web development started with a fascination for technology and design, it has evolved into a deep-seated love for creating beautiful and functional digital experiences. Every project I undertake is a new opportunity to learn, grow, and push the boundaries of what's possible. From concept to completion, I pour my heart and soul into every line of code, ensuring that the end product is not only visually appealing but also seamlessly functional. Thank you for visiting my portfolio. I look forward to the possibility of collaborating on exciting projects and bringing more of my dreams to life through the power of web development. Feel free to reach out to me at `;

    const email = "sahalom4729@gmail.com";
console.log(inView);
    return (
        <div id='about'   className="bg-black-p md:p-7 p-4 lg:p-10  lg:pl-14 md:pl-12 ">
            <div ref={ref} className="max-w lg:p-5 md:p-3 p-1 title-section ">
                <div className="rounded-r-full border-color-p flex lg:flex-row md:flex-row flex-col gap-5 w-full">
                    <div className="flex-1 p-">
                        <h1 className={`text-color-p font-bold `}>ABOUT ME</h1>
                        <div className={` bg-color-p  animated-line ${inView ? 'animate' : ''}`} />
                        <p className="text-slate-500 mt-4">
                            {isReadMore ? `${text.slice(0, 450)}...` : (
                                <>
                                    {text}
                                    <div className="flex flex-col text-white">

                                        <div className="mt-4 flex flex-col">
                                            <h1 className="text-xl font-bold border-b">Education</h1>
                                            <h1 className='flex items-center'> <LiaSchoolSolid /> Higher Secondary Certificate <strong>(HSC)</strong></h1>
                                            <p> <strong>College:</strong>Syed Shah Mostafa College</p>
                                            <p className=""> <strong>Year:</strong> 2018 </p>

                                        </div>
                                        <div className="mt-4 flex flex-col">
                                            <h1 className="text-xl font-bold border-b">Achievements</h1>
                                            <p className=""> <strong>Institute:</strong>Programming Hero.</p>
                                            <p className=""><strong>Course:</strong> Completed a web development course. </p>
                                            <a href="https://drive.google.com/file/d/1mJWPTlTqSm8euOgvmfPezWLtFbUAb69Y/view" target="_blank" className="text-blue-500 underline ml-2">View Certificate</a>
                                        </div>
                                    </div>
                                    <p className="mt-4">
                                        <a href={`mailto:${email}`} className="text-blue-500 underline">sahalom4729@gmail.com</a> or connect with me on
                                    </p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="https://www.facebook.com/sai.ami.393" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className="w-6 h-6 text-blue-600" />
                                        </a>
                                        <a href="https://github.com/ShahAlom47" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="w-6 h-6 text-gray-400" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/shah-alom-626322290/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="w-6 h-6 text-blue-700" />
                                        </a>
                                    </div>
                                </>
                            )}
                        </p>
                        <button onClick={toggleReadMore} className="btn-p mt-6">
                            {isReadMore ? "Read More" : "Read Less"}
                        </button>
                    </div>
                    <div className="rounded-full h-ful lg:w-4/12 md:w-4/12 w-8/12 mx-auto  my-auto">
                    <img src={myPhoto} alt="Your Photo" className={`border-color-p bg-gray-500  border-4 w-full h-full rounded-full  animated-line ${inView ? 'animate' : ''} `} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;


// service id   service_6ip17cg
