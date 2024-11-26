import { useEffect } from "react";
import SectionOne from "../components/AboutPageCompoments/SectionOne";
import SectionThree from "../components/AboutPageCompoments/SectionThree";
import SectionTwo from "../components/AboutPageCompoments/SectionTwo";
import Title from "../components/AboutPageCompoments/Title";
import ReactGA from "react-ga4";
import Hotjar from '@hotjar/browser';







const AboutUsPage = () => {
    useEffect(() => {
        ReactGA.initialize('G-84NY194QPT'); // Replace with your Measurement ID
        ReactGA.send('pageview'); // Track the initial pageview
        
        const siteId = 5220929;
        const hotjarVersion = 6;
        
        Hotjar.init(siteId, hotjarVersion);
      }, []);
    return (
        <>
            <Title />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    )
};

export default AboutUsPage;