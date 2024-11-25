import { useEffect } from "react";
import SectionEight from "../components/HomePageComponents/SectionEight";
import SectionFive from "../components/HomePageComponents/SectionFive";
import SectionFour from "../components/HomePageComponents/SectionFour";
import SectionOne from "../components/HomePageComponents/SectionOne";
import SectionSeven from "../components/HomePageComponents/SectionSeven";
import SectionSix from "../components/HomePageComponents/SectionSix";
import SectionThree from "../components/HomePageComponents/SectionThree";
import SectionTwo from "../components/HomePageComponents/SectionTwo";
import ReactGA from "react-ga4";



const LandingPage = () => {


    useEffect(() => {
        ReactGA.initialize('G-84NY194QPT'); // Replace with your Measurement ID
        ReactGA.send('pageview'); // Track the initial pageview
    }, []);


    return (
        <>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
           
        </>
    );
};

export default LandingPage;