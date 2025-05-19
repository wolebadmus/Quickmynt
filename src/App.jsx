import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DemoForm from "./components/DemoForm";
import useModalStore from "./store/modalStore";
// import SignUpPage from "./pages/SignUpPage";
import SignUpRedirect from "./pages/SignUpRedirect";

function App() {
  const { isOpen } = useModalStore();

  return (
    <div className={`flex flex-col items-center scroll-smooth bg-transparent ${isOpen ? "overflow-y-hidden" : "overflow-y-auto"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
        <Route path="/sign-up" element={<SignUpRedirect />} />
         {/* (optional) keep old /signup for safety */}
        {/* <Route path="/signup" element={<Navigate to="/sign-up" replace />} /> */}
      </Routes>
      <Footer />
      <DemoForm />
    </div>
  );
}

export default App;
