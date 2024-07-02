import { AiOutlineDownload } from 'react-icons/ai';
import bg from '../../../assets/image/banner.jpg';

const Banner = () => {
    return (
        <div className="bg-fixed bg-cover bg-center h-screen " style={{ backgroundImage: `url(${bg})` }}>
            <div className=" h-full flex items-center p-5">
            <div className=" h-scree max-w p-10 font-spline ">
              <div className="md:w-1/2 lg:w-1/2">
              <h4 className='text-color-p font-bold'>Hello, I`m Shah Alom</h4>
                <h1 className="text-3xl text-white font-bold my-2 mb-4 ">Creative Front-End Developer</h1>
                <p className=' text-white text-xs '>
                    Skilled in HTML, CSS, React, and more, I build user-friendly websites and applications with innovative designs.</p>

                       
                    <button className='btn-p  px-4 py-1 my-6  '>
                    <a className='w-[200px] flex items-center gap-3' download={'sah-alom-resume.pdf'}  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1mJWPTlTqSm8euOgvmfPezWLtFbUAb69Y/view">Download Resume <AiOutlineDownload /></a>
                    </button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
