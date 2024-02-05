import "./App.css";
// import axios from 'axios'

// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=buenosaires&appid=86f22c7adcb7ae17839faee72c2822df`)

// IMGS
import icono from "../assets/Weather-icon.png";

// ICONS
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch, FaWind } from "react-icons/fa";

function App() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen">
      <div
        className="bg-green-400 w-1/3 h-3/4 flex flex-col items-center justify-center rounded-lg border border-white"
        id="weather-box"
      >
        <div
          className="flex items-center border border-white rounded-full p-2 mb-4"
          id="search-box"
        >
          <FaLocationDot className="text-white text-lg" />
          <input
            type="text"
            className="rounded-md p-2 w-full bg-transparent text-white"
            placeholder="Enter Your Location"
          />
          <button className="p-1">
            <FaSearch className="text-white" />
          </button>
        </div>
        <div id="weather-info" className="flex flex-col items-start justify-center p-4">
          <img src={icono} alt="Icono tiempo" className="w-1/3 self-center" />
          <div className="items-start">
          <p className="text-white font-semibold text-2xl" id="temp">26<span className="font-bold">ºC</span></p>
          <p className="text-white text-md" id="info">Nublado</p>
          <p className="text-white text-md" id="humidity">Humedad: <span className="font-bold">60</span>%</p>
          <p className="text-white text-md" id="humidity"><FaWind /> 10 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
