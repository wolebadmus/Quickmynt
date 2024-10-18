import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
        <div className='flex flex-col items-center'>
          <Header />
          <Routes>
              <Route path="/" Component={LandingPage} />
          </Routes>
          <Footer />
        </div>
  );
};

export default App
