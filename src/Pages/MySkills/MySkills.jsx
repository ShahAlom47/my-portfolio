
import logoHtml from '../../assets/logo/HTML5.png';
import logoCss from '../../assets/logo/CSS3.png';
import logoTailwind from '../../assets/logo/Tailwind CSS.png';
import logoJavaScript from '../../assets/logo/JavaScript.png';
import logoReact from '../../assets/logo/React.png';
import logoNode from '../../assets/logo/Node.js.png';
import logoExpress from '../../assets/logo/Express.png';
import logoFirebase from '../../assets/logo/Firebase.png';
import logoMongoDB from '../../assets/logo/MongoDB.png';
import logoTs from '../../assets/logo/typescript.png';
import { useInView } from 'react-intersection-observer';


const MySkills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,  
        threshold: 0.1,  
      });
    
    return (
        
        <div ref={ref} id='skill' className=" bg-black-p  lg:pl-14 md:pl-12">
            <div className="max-w md:p-7 p-4 lg:p-10  py-16">
                <div className=" flex lg:flex-row-reverse md:flex-row-reverse flex-col  gap-4">
                <div className=" text-white lg:w-4/12 md:w-4/12 w-full px-4 my-5">
                    <h1 className=" text-3xl font-bold   text-color-p"> MY SKILLS    </h1>
                    <div className={` bg-color-p  pb-4 animated-line ${inView ? 'animate' : ''}`} />
                    <p className="w-">As a newcomer to the field of front-end development, I am eager to apply my growing knowledge and skills to real-world projects.  I am committed to creating responsive, user-friendly, and visually appealing websites. My enthusiasm for learning and adapting ensures that I am continually improving and staying updated with the latest industry trends</p>
                </div>
                <div className=' flex flex-wrap justify-center gap-5 flex-1'>
                   {
                    skills.map((data,index)=> <div 
                    key={index}
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(30px)',
                        transition: `opacity 0.5s ease ${index * 0.2}s, transform 10s ease ${index * 0.2}s`,
                      }}
                    >
                    <div className=" border-2 border-color-p rounded-xl p-6 bg-stone-800 ">
                        <img className={` h-7 w-7   md:w-10 md:h-10 lg:w-12 lg:h-12`} src={data.logo} alt="" />

                    </div>
                    <h1 className=' text-center text-base lg:text-lg font-semibold mt-3 text-color-p'>{data.skill}</h1>
                    </div>)
                   }
                </div>
                </div>

            </div>
            
        </div>
        
    );
};

export default MySkills;

const skills = [
    { skill: 'HTML', logo: logoHtml },
    { skill: 'CSS', logo: logoCss },
    { skill: 'Tailwind CSS', logo: logoTailwind },
    { skill: 'JavaScript', logo: logoJavaScript },
    { skill: 'React.js', logo: logoReact },
    { skill: 'Node.js', logo: logoNode },
    { skill: 'Express.js', logo: logoExpress },
    { skill: 'Firebase', logo: logoFirebase },
    { skill: 'MongoDB', logo: logoMongoDB },
    { skill: 'TypeScript', logo: logoTs }
];