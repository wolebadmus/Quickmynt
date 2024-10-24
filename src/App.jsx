import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';

function App() {

  return (
        <div className='flex flex-col items-center'>
          <Header />
          <Routes>
              <Route path="/" Component={LandingPage} />
              <Route exact path="/about-us" Component={AboutUsPage} />
          </Routes>
          <Footer />
        </div>
  );
};

export default App
