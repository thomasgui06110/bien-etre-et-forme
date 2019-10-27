import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import meteoAPI from "../services/meteoAPI";

const HomePage = props => {
  const [name, setName] = useState([]);
  const [temp, SetTemp] = useState([]);
  const [conditions, SetConditions] = useState([]);
  const [description, setDescription] = useState([]);
  const weatherIcons = {
    Rain: "wi wi-day-rain text-center",
    Clouds: "wi wi-day-cloudy text-center",
    Clear: "wi wi-day-sunny",
    Snow: "wi wi-day-snow",
    mist: "wi wi-day-fog",
    Drizzle: "wi wi-day-sleet"
  };

  async function main() {
    // 1. Choper IP du PC qui ouvre la 📄
    const ip = await meteoAPI.ip();

    const ville = await meteoAPI.ville(ip);
    
    
    const meteo = await meteoAPI.meteo(ville);
    displayWeatherInfos(meteo);
  }
  const displayWeatherInfos = data => {
    setName(data.name[0].toUpperCase() + data.name.slice(1));
    SetTemp(data.main.temp);
    SetConditions(data.weather[0].main);
    setDescription(data.weather[0].description);
  };


  main();
  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3 text-center">{name}</h1>
        <i className={weatherIcons[conditions]}></i>
        <p className="text-center">
          {" "}
          {Math.round(temp)} - ({description})
        </p>
        <p className="lead">Gestion de l'association</p>
        <hr className="my-4" />
        <p>Accès réservé aux administrateurs munis d'un mot de passe 👮</p>
        <p className="lead">
          <NavLink to="/login" className="btn btn-primary">
            Connexion
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default HomePage;
