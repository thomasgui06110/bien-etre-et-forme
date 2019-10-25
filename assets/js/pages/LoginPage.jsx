import React, { useState } from "react";
import AuthAPI from "../services/authAPI";
import Field from "../components/forms/Fields";
import { toast } from "react-toastify";

const LoginPage = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Gestion des champs
  const handelChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    setCredentials({ ...credentials, [name]: value }); // ON RECUPERE TABLEAU ET REMPLACE PAR NEW VALEUR
  };

  //Gestion du submit
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await AuthAPI.authenticate(credentials);

      setError("");
      onLogin(true);
      toast.success("Vous êtes connecté 😺")
      history.replace("/invoices");
    } catch (error) {
      console.log(error.response);
      setError("Les identifiants sont incorects");
      toast.error("Une erreur est survenue 🙊")
    }
  };
  return (
    <>
      <h1>Connexion à l'Application</h1>

      <form onSubmit={handleSubmit}>
        <Field
          label="Adresse email"
          name="username"
          value={credentials.username}
          onChange={handelChange}
          placeholder="Adresse email de connexion"
          error={error}
        />

        <Field
          name="password"
          label="Mot de passe"
          value={credentials.password}
          onChange={handelChange}
          type="password"
          error=""
        />
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Connexion
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
