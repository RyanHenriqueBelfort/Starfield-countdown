import { useEffect, useState } from "react";
import StarfiedLogo from "./assets/Starfield_logo.svg";
import music from './assets/Starfield Suite _ Starfield OST (320 kbps).mp3'

import './audio.css'

function App() {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const realeaseStarfield = new Date(2023, 7, 31, 21).getTime();

  useEffect(() => {
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const timeRemaining = realeaseStarfield - now;

      setDay(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
      // Quando o contador regressivo chegar a zero
      if (timeRemaining < 0) {
        clearInterval(interval);
      }
    }, 1000); // Intervalo de 1 segundo (1000 ms)
  }, []);

  return (
    <div className="h-screen w-screen bg-cover font-inter bg-black">
      <div className="bg-Image-default bg-no-repeat bg-cover bg-fixed h-[85%] w-screen flex items-center flex-col ">
      <audio controls id="audio" autoPlay loop>
          <source src={music} type="audio/mp3"/>
          <source src={music} type="audio/ogg"/>
        </audio>
        <div className="h-[800px] w-10/12 flex justify-end">  
          <img
            src={StarfiedLogo}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
            className="w-80"
          />
        </div>
        <div className="text-white text-7xl flex font-bold bg-neutral-900 rounded-t-lg bg-opacity-60">
          <div className="flex flex-col items-center   w-64  p-4 rounded-sm">
            <span className="text-8xl">{day}</span>
            <span className="text-5xl font-normal">Dia{day > 1 ? 's' : ''}</span>
          </div>
          <div className="flex flex-col items-center  80 w-64  p-4  rounded-sm">
          <span className="text-8xl">{hours}</span>
            <span className="text-5xl font-normal">Hora{hours >= 10 ? 's' : ''}</span>
          </div>
          <div className="flex flex-col items-center 80 w-64  p-4  rounded-sm">
          <span className="text-8xl">{minutes}</span>
           <span className="text-5xl font-normal">Min</span>
          </div>
          <div className="flex flex-col items-center 80 w-64  p-4  rounded-sm">
          <span className="text-8xl">{seconds}</span>
          <span className="text-5xl font-normal">Seg</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-screen h-[15%]">
        <div className="bg-[#304A7A] w-screen "></div>
        <div className="bg-[#DCA74A] w-screen "></div>
        <div className="bg-[#E16038] w-screen "></div>
        <div className="bg-[#C72238] w-screen "></div>
      </div>
    </div>
  );
}

export default App;
