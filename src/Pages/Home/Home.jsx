import AboutMe from "../AboutMe/AboutMe";
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
            
        </div>
    );
};

export default Home;