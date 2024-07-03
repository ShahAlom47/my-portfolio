import  { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../../assets/image/my-photo.png';

const AboutMe = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        setIsButtonVisible(!isButtonVisible);
    };

    const text = `Welcome to my portfolio! I am Shah Alom, a Creative Front-End Developer with a passion for building user-friendly and innovative websites and applications. Web development is not just a profession for me it's a dream, a passion, and an emotion that drives me every day. With a strong foundation in HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js, Firebase, and MongoDB, I bring my creative visions to life through clean, efficient, and engaging code. My journey into web development started with a fascination for technology and design,  it has evolved into a deep-seated love for creating beautiful and functional digital experiences. Every project I undertake is a new opportunity to learn, grow, and push the boundaries of what's possible. From concept to completion, I pour my heart and soul into every line of code, ensuring that the end product is not only visually appealing but also seamlessly functional. Thank you for visiting my portfolio. I look forward to the possibility of collaborating on exciting projects and bringing more of my dreams to life through the power of web development. Feel free to reach out to me at `;

    const email = "sahalom4729@gmail.com";

    return (
        <div className="bg-stone-900 p-10">
            <div className="max-w lg:p-5 md:p-3 p-1">
                <div className="rounded-r-full border-color-p flex lg:flex-row md:flex-row flex-col gap-5 w-full">
                    <div className="flex-1 p-">
                        <h1 className="text-color-p font-bold border-b-2 border-color-p mb-5  text-lg">ABOUT ME</h1>
                        <p className="text-slate-500">
                            {isReadMore ? `${text.slice(0, 450)}...` : text}
                            {isReadMore ? null : (
                                <>
                                    <a href={email} className="text-blue-500 underline">sahalom4729@gmail.com</a> or connect with me on
                                    <div className="flex space-x-4 mt-2">
                                        <a href="https://www.facebook.com/sai.ami.393" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className="w-6 h-6 text-blue-600" />
                                        </a>
                                        <a href="https://github.com/ShahAlom47" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="w-6 h-6 text-gray-800" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/shah-alom-626322290/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="w-6 h-6 text-blue-700" />
                                        </a>
                                    </div>
                                </>
                            )}
                        </p>
                        <button onClick={toggleReadMore} className='btn-p mt-6'>
                            {isReadMore ? "Read More" : "Read Less"}
                        </button>
                    </div>
                    <div className="rounded-full h-full lg:w-4/12 md:w-4/12 w-8/12 mx-auto bg-gray-500 my-auto">
                        <img src={myPhoto} alt="Your Photo" className='border-color-p border-4 w-full h-full rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
