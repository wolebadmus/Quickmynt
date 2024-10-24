import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import DemoForm from './components/DemoForm';
import useModalStore from './store/modalStore';

function App() {

  const {isOpen} = useModalStore();

  return (
        <div className={`flex flex-col items-center scroll-smooth ${isOpen ? 'overflow-y-hidden' : 'overflow-y-auto' }`}>
          <Header />
          <Routes>
              <Route path="/" Component={LandingPage} />
              <Route exact path="/about-us" Component={AboutUsPage} />
              <Route exact path="/contact-us" Component={ContactUsPage} />
          </Routes>
          <Footer />
          <DemoForm />
        </div>
  );
};

export default App
