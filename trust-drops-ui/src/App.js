import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { DataProvider } from './context/DataContext';
import Airdrop from './pages/Airdrop.jsx';
import LeaderBoard from './pages/LeaderBoard.jsx';
import { AnimatePresence } from 'framer-motion';
import React, {useEffect,useState} from 'react';
import { ThemeProvider } from "./context/theme.js";



function App() {
  const [themeMode, setThemeMode] = useState("bright");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const brightTheme = () => {
    setThemeMode("bright");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "bright");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <div className='App h-screen  dark:bg-black '>
       <ThemeProvider value={{ themeMode, darkTheme, brightTheme }}>
      <DataProvider>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/staking' element={<Dashboard />} />
            <Route path='/leaderboard' element={<LeaderBoard />} />
            <Route path='/airdrop' element={<Airdrop />} />
          </Routes>
        </AnimatePresence>
      </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
