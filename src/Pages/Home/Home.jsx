import AboutMe from "../AboutMe/AboutMe";
import MyProject from "../MyProject/MyProject";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MyProject></MyProject>
            
        </div>
    );
};

export default Home;