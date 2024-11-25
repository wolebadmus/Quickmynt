import { useEffect } from "react";
import SectionOne from "../components/ContactUsComponents/SectionOne";
import Title from "../components/ContactUsComponents/Title";
import ReactGA from "react-ga4";






const ContactUsPage = () => {

    useEffect(() => {
        ReactGA.initialize('G-84NY194QPT'); // Replace with your Measurement ID
        ReactGA.send('pageview'); // Track the initial pageview
      }, []);

    return (
        <>
            <Title />
            <SectionOne />
        </>
    );

};
export default ContactUsPage;