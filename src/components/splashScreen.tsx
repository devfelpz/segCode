import type React from "react";

interface SplashScreenProps {
  fadeOut: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ fadeOut }) => {
  return (
    <div
    className={`flex items-center justify-center h-screen bg-gradient-to-tr from-blue-900 to-blue-400 transition-opacity duration-[1000ms] ease-out ${
      fadeOut ? "opacity-0" : "opacity-100"
    }`}
  >
      <div className="flex flex-col items-center justify-center text-center sm:text-left sm:animate-pulse">
      <p id="login-form-title" className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wide text-white max-w-[90%] sm:max-w-none">
            SEGCODE
          </p>
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl uppercase text-gray-400 mt-1 sm:mt-2 tracking-widest">
            SURVEILLANCE TOOLS
          </p>
      </div>
    </div>
  );
};

export default SplashScreen;
