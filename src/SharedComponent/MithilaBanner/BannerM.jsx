import { TypeAnimation } from "react-type-animation";


const BannerM = () => {
  const ringAnimation = `
    @keyframes ringAnimation {
      0% { border-color: #ff0000; }
      25% { border-color: #00ff00; }
      50% { border-color: #0000ff; }
      75% { border-color: #ff00ff; }
      100% { border-color: #ff0000; }
    }
  `;

  return (
    <div
      className="lg:min-h-[500px] md:h-[500px] bg-center bg-cover bg-opacity-40"
      style={{ backgroundImage: 'url(https://i.ibb.co/r6mt2q0/mithilabbaaner-bg.jpg)' }}
    >
      <div className="max-w-[1200px] m-auto lg:p-8 md:p-4 p-2 md:h-[500px] py-5  lg:h-[500px] flex lg:flex-row md:flex-row gap-5 flex-col justify-center items-center">
        <div className="lg:w-1/2 md:w-1/2 p-6 w-full">
        <h4 className='  text-[#aec600] font-bold  text-2xl space-y-2 '>Hello, <br />
                       <span className=" text-4xl">I`m</span>
                        <TypeAnimation
                            sequence={[
                                ' Mithila',
                                3000,]}
                            speed={10}
                            cursor={false}
                            style={{ fontSize: '2em' }}

                        />

                        </h4>
                        <TypeAnimation
                            sequence={[
                                'Creative Front-End Developer ',
                                2000,
                                ' Front-End Developer',
                                2000,

                            ]}
                            speed={10}
                            cursor={false}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            className=' text-[#aec600]  mt-6 font-bold text-lg'

                        />
                        <p className=" text-[#aec600] mt-2">Proficient in HTML, CSS, and React, I create user-friendly and creatively designed web applications.</p>
        
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full h-full flex justify-center items-center">
          <style>{ringAnimation}</style>
          <div
            className="rounded-full border-4  w-4/6  p-1"
            style={{
              animation: 'ringAnimation 5s infinite linear',
            }}
          >
            <img
              className="m-auto rounded-full w-full"
              style={{ transform: 'scaleX(-1)' }}
              src="https://i.ibb.co/KqSs85b/mithila-banner-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerM;
