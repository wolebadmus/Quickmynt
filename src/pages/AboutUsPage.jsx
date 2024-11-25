import { useEffect } from "react";
import SectionOne from "../components/AboutPageCompoments/SectionOne";
import SectionThree from "../components/AboutPageCompoments/SectionThree";
import SectionTwo from "../components/AboutPageCompoments/SectionTwo";
import Title from "../components/AboutPageCompoments/Title";
import ReactGA from "react-ga4";






const AboutUsPage = () => {
    useEffect(() => {
        ReactGA.initialize('G-84NY194QPT'); // Replace with your Measurement ID
        ReactGA.send('pageview'); // Track the initial pageview
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