import { AiOutlineDownload } from 'react-icons/ai';
import bg from '../../../assets/image/banner.jpg';
import { TypeAnimation } from 'react-type-animation';
import AnimatedText from '../../../Components/AnimatedText';

const Banner = () => {
    return (

        <div id='home' className="bg-fixed bg-cover bg-center lg:h-screen md:h-screen overflow-hidden pt-10 lg:pl-14 md:pl-12 pl-2 " style={{ backgroundImage: `url(${bg})` }}>
            <div className=" h-full flex max-w p-5">
                <div className=" h-scree py-10 md:px-5 lg:px-10 px-2 font-spline flex justify-between w-full ">
                    <div className="md:w-1/2 lg:w-1/2 w-full flex flex-col">
                        <h4 className='text-color-p font-bold'>Hello,
                            <TypeAnimation
                                sequence={[
                                    'I’m Shah Alom',
                                    3000,
                                ]}
                                speed={10}
                                cursor={false}
                                style={{ fontSize: '' }}
                            />
                        </h4>
                        <h1 className=" text-white font-bold lg:flex md:flex  my-2 mb-4">
                            <AnimatedText text="Creative Front-End " /> 
                            <AnimatedText text="Developer" /> 
                        </h1>
                        <p className='text-white text-xs lg:text-sm'>
                            Skilled in HTML, CSS, React, and more, I build user-friendly websites and applications with innovative designs.
                        </p>
                        <TypeAnimation
                            sequence={[
                                'A Journey of Dreams',
                                2000,
                                'A Journey of Emotions',
                                2000,
                            ]}
                            speed={10}
                            cursor={false}
                            style={{ fontSize: '' }}
                            repeat={Infinity}
                            className='text-color-p mt-6 font-bold text-lg'
                        />
                        <button className='btn-p px-4 py-1 my-6'>
                            <a className='w-[200px] flex items-center gap-3' download={'sah-alom-resume.pdf'} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/15yULy7WABPFVZ38hbcpLJFxgZPQ4-9Fx/view">Download Resume <AiOutlineDownload /></a>
                        </button>
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
        </div>
      
    );
};

export default Banner;
