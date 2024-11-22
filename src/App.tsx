import { useEffect, useState } from 'react';
import LoginPage from './components/loginPage';
import SplashScreen from './components/splashScreen';



const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); 
    }, 2500); 

    const hideTimer = setTimeout(() => {
      setShowSplash(false); 
    }, 3500); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
	return (
    <>
    {showSplash ? <SplashScreen fadeOut={fadeOut}/> : <LoginPage/>}
    </>
	);
};

export default Home;
