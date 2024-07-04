import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import MyProject from "../MyProject/MyProject";
import MySkills from "../MySkills/MySkills";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
           <MyProject></MyProject>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;