import React, { useContext, useState, useEffect } from "react";
import AuthAPI from "../services/authAPI";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

import jwtDecode from "jwt-decode";

const Navbar = ({ history }) => {
  const [name, setName] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handelLogout = () => {
    AuthAPI.logout();

    setIsAuthenticated(false);
    toast.info("Vous êtes déconnecté 😁");
    history.push("/login");
  };

  function nameUser() {
    const token = window.localStorage.getItem("authToken");

    if (token) {
      const { exp: expiration } = jwtDecode(token);

      if (expiration * 1000 > new Date().getTime()) {
        const { firstName: Names } = jwtDecode(token);

        setName(Names);
      }
    }
  }
  useEffect(() => {
    nameUser();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Bien être et Forme
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Adhérents <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/invoices/sum">
              Cotisations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/stats">
              Statistiques
            </NavLink>
          </li>
        
        </ul>
        <ul className="navbar-nav ml-auto">
          {(!isAuthenticated && (
            <>
              {/* <li className="nav-item mr-1">
                <NavLink to="/login" className="nav-link">
                  Inscription
                </NavLink>
              </li> */}
              <li className="nav-item mr-2">
                <NavLink to="/login" className="btn btn-info">
                  Connexion
                </NavLink>
              </li>
            </>
          )) || (
            <>
              <li className="nav-item">
                <button onClick={handelLogout} className="btn btn-danger">
                  Deconnexion
                </button>
              </li>
              <li className="Nav-item">
                <span className="navbar-brand ml-2"> Bonjour {name} 🍹</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
