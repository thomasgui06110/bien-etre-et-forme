import React, { useState } from "react";
import Field from "../components/forms/Fields";
import axios from "axios";
import { USERS_API} from "../config";

const RegisterPage = props => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handelChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        //"https://bienetreforme.heroku.com/api/users",
        USERS_API,
       // "http://localhost:8000/api/users",
        user
      );
     
    } catch (error) {
      console.log(error.response);
    }
    console.log(user);
  };
  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={handelSubmit}>
        <Field
          name="firstName"
          label="Prenom"
          error={errors.firstName}
          placeholder="Prénom"
          value={user.firstName}
          onChange={handelChange}
        />
        <Field
          name="lastName"
          label="Nom"
          error={errors.lastName}
          placeholder="Nom"
          value={user.lastName}
          onChange={handelChange}
        />
        <Field
          name="email"
          error={errors.email}
          label="email"
          placeholder="mail"
          value={user.email}
          onChange={handelChange}
        />
        <Field
          name="password"
          label="passowrd"
          error={errors.password}
          type="password"
          placeholder="mot de passe"
          value={user.password}
          onChange={handelChange}
        />
        <div className="from-group">
          <button type="submit" className="btn btn-primary">
            confirmation
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
