import { TypeAnimation } from "react-type-animation";


const Loading = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center bg-black">
            <div className="flex flex-col  justify-center items-center">


            <TypeAnimation
                            sequence={[
                                'SHAH ALOM',
                                1000,
                                
                            ]}
                            speed={10}
                            cursor={false}
                            style={{ fontSize: '' }}
                            repeat={Infinity}
                            className=' text-color-p font-bold text-xl'

                        />
                         <TypeAnimation
                            sequence={[
                                '.............',
                                1000,
                                '---------',
                                1000,
                                
                            ]}
                            speed={20}
                            cursor={false}
                            style={{ fontSize: '' }}
                            repeat={Infinity}
                            className=' text-color-p -m-5 font-bold text-4xl'

                        />


            </div>
           
            </div>
            
        
    );
};

export default Loading;