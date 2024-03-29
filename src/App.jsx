// STYLES
import "./App.css";

// HOOKS
import { useState } from "react";

import axios from 'axios'


// IMGS
import icono from "../assets/Weather-icon.png";

// ICONS
// import { FaLocationDot } from "react-icons/fa6";
// import { FaSearch, FaWind } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

function App() {
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');

  const consultarApi = async () => {

    
    try {
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ubicacion}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      console.log(data)
      const { lat, lon } = data[0];
      const urlClima = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=2d3d9f66e234f78add776b546cf6b80a`
      const { data: clima } = await axios(urlClima)
      console.log(clima)

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="flex items-center justify-center container mx-auto h-screen">
      <div
        className="bg-white/25 blur-bg w-full md:w-1/2 lg:w-1/3 h-3/4 flex flex-col items-center justify-center rounded-2xl border border-white p-4"
        id="weather-box"
      >
        <div
          className="flex items-center justify-center pb-4"
          id="search-box"
        >
          {/* <FaLocationDot className="text-white text-lg" /> */}
          <form
            className="flex flex-col justify-center gap-4"
            // onSubmit={}
          >
            <input
              type="text"
              className="p-2 w-full bg-transparent text-white border rounded-full border-white"
              placeholder="Ingresa la ciudad"
              onChange={e => { setCiudad(e.target.value) }}
            />
            <select 
            className="rounded-full bg-transparent border border-white text-white p-2"
            onChange={e => { setPais(e.target.value) }}
            >
              <option value={''} className="text-gray-700 font-bold" >Selecciona un pais</option>
              <option value={'US'} className="text-gray-700 font-bold" >Estados Unidos</option>
              <option value={'AR'} className="text-gray-700 font-bold" >Argentina</option>
              <option value={'MX'} className="text-gray-700 font-bold" >Mexico</option>
            </select>
            <input
            type="submit"
            value='Buscar'
            className="cursor-pointer bg-orange-500 rounded-xl font-black uppercase p-2 text-white first-line hover:bg-gray-200 transition-colors text-xl hover:text-gray-600"
            />
          </form> 
          {/* <button
            className="p-1"
            onClick={consultarApi}
          >
            <FaSearch className="text-white" />
          </button> */}
        </div>
        <div
          id="weather-info"
          className="flex flex-col items-center justify-center p-4"
        >
          <img src={icono} alt="Icono tiempo" className="w-1/3 self-center" />
          <div>
            <p className="text-white drop-shadow-lg font-black text-4xl text-center">
              26 ºC
            </p>
            <p
              className="text-white drop-shadow-lg text-md font-semibold uppercase text-center"
              id="info"
            >
              Nublado
            </p>
            <div
              className="flex flex-col md:grid md:grid-cols-2 container mx-auto gap-6 pt-4"
              id="container-info"
            >
              <div id="humedad" className="flex items-center">
                <p className="text-white drop-shadow-lg text-md" id="humidity">
                  <LuWaves className="text-5xl me-2" />
                </p>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-white drop-shadow-lg text-md font-bold">60%</p>
                  <p className="text-white drop-shadow-lg text-md">Humedad</p>
                </div>
              </div>
              <div id="humedad" className="flex items-center">
                <p className="text-white drop-shadow-lg text-md" id="humidity">
                  {/* <FaWind className="text-5xl me-2" /> */}
                </p>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-white drop-shadow-lg text-md font-bold">10 Km/h</p>
                  <p className="text-white drop-shadow-lg text-md">Viento</p>
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
