import type React from "react";

interface SplashScreenProps {
  fadeOut: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ fadeOut }) => {
  return (
    <div
      className={`flex items-center justify-center h-screen bg-gradient-to-tr from-blue-900 to-blue-400 transition-opacity duration-[2000ms] ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center animate-pulse">
        <p className="text-8xl font-bold tracking-wide text-white">SEGCODE</p>
        <p className="text-4xl ml-20 uppercase text-gray-400 mt-2 tracking-widest">
          SURVEILLANCE TOOLS
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
