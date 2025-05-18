import { useEffect } from "react";
import SectionOne from "../components/ContactUsComponents/SectionOne";
import Title from "../components/ContactUsComponents/Title";
import ReactGA from "react-ga4";
import Hotjar from "@hotjar/browser";

const ContactUsPage = () => {
  useEffect(() => {
    ReactGA.initialize("G-84NY194QPT"); // Replace with your Measurement ID
    ReactGA.send("pageview"); // Track the initial pageview

    const siteId = 5220929;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <>
      {/* <Title /> */}
      <SectionOne />
    </>
  );
};
export default ContactUsPage;
