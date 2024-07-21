import { Element, scroller } from "react-scroll";
import Footer from "../../SharedComponent/Footer";
import Navbar from "../../SharedComponent/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import MyProject from "../MyProject/MyProject";
import MySkills from "../MySkills/MySkills";
import Banner from "./Banner/Banner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        console.log(hash);
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <div>
            <Navbar></Navbar>
            <Element name="home">   <Banner></Banner></Element>
            <Element name="about">  <AboutMe></AboutMe></Element>
            <Element name="skill">  <MySkills></MySkills></Element>
            <Element name="project">  <MyProject></MyProject></Element>
            <Element name="contact"> <Contact></Contact></Element>
            <Footer></Footer>
        </div>
    );
};

export default Home;
