import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Header from './components/Header';

function App() {

  return (
        <div className='flex flex-col items-center'>
          <Header />
          <Routes>
              <Route path="/" Component={LandingPage} />
          </Routes>
        </div>
  );
};

export default App
