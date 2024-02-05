import "./App.css";
// import axios from 'axios'

// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=buenosaires&appid=86f22c7adcb7ae17839faee72c2822df`)

// IMGS
import icono from "../assets/Weather-icon.png";

// ICONS
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch, FaWind } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

function App() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen">
      <div
        className="bg-white/25 blur-bg w-1/3 h-3/4 flex flex-col items-center justify-center rounded-lg border border-white"
        id="weather-box"
      >
        <div
          className="flex items-center border border-white rounded-full p-2 mb-4"
          id="search-box"
        >
          <FaLocationDot className="text-white text-lg" />
          <input
            type="text"
            className="rounded-md p-2 w-full bg-transparent text-white border-none outline-none"
            placeholder="Ingresa Tu Ubicación"
          />
          <button className="p-1">
            <FaSearch className="text-white" />
          </button>
        </div>
        <div
          id="weather-info"
          className="flex flex-col items-center justify-center p-4"
        >
          <img src={icono} alt="Icono tiempo" className="w-1/3 self-center" />
          <div>
            <p className="text-gray-800 font-black text-4xl text-center">
              26 ºC
            </p>
            <p
              className="text-gray-800 text-md font-semibold uppercase text-center"
              id="info"
            >
              Nublado
            </p>
            <div
              className="grid grid-cols-2 container mx-auto gap-6 mt-4"
              id="container-info"
            >
              <div id="humedad" className="flex items-center">
                <p className="text-gray-800 text-md" id="humidity">
                  <LuWaves className="text-5xl me-2"/>
                </p>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-gray-800 text-md font-bold">60%</p>
                  <p className="text-gray-800 text-md">Humedad</p>
                </div>
              </div>
              <div id="humedad" className="flex items-center">
                <p className="text-gray-800 text-md" id="humidity">
                  <FaWind className="text-5xl me-2"/>
                </p>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-gray-800 text-md font-bold">10 Km/h</p>
                  <p className="text-gray-800 text-md">Viento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
