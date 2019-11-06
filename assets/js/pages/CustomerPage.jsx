import React, { useState, useEffect } from "react";
import Field from "../components/forms/Fields";
import { Link } from "react-router-dom";
import CustomersAPI from "../services/customersAPI";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const CustomerPage = ({ match, history }) => {
  const { id = "new" } = match.params;

  const [customer, setCustomer] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    comment: "",
    postalCode: "",
    town: "",
    adress: ""
  });

  const handelChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCustomer({ ...customer, [name]: value });
  };

  const [errors, setErrors] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    comment: "",
    town: "",
    adress: ""
  });

  const [editing, setEditing] = useState(false);

  // Recuperation du customer en fonction de l'identifiant
  const fetchCustomer = async id => {
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        comment,
        postalCode,
        town,
        adress
      } = await CustomersAPI.find(id);

      setCustomer({
        firstName,
        lastName,
        email,
        phoneNumber,
        comment,
        postalCode,
        town,
        adress
      });
    } catch (error) {
      console.log(error.reponse);
      // TODO : NOTIFICATION erreurs
      history.replace("/customers");
    }
  };

  // Chargement du customer si besoin au chargement du composant ou au changement de l'identifiant
  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchCustomer(id);
    }
  }, [id]);

  const handelSubmit = async event => {
    event.preventDefault();

    try {
      if (editing) {
        await CustomersAPI.update(id, customer);
        // TODO : notification de succes
        toast.success("L'adhérent a bien été mis à jour 🙂", {
          position: toast.POSITION.BUTTON_CENTER
        });
      } else {
        await CustomersAPI.create(customer);
        // TODO : Flash notification
        toast.success("L'adhérent a bien été créé 🙂");
       // history.replace("/customers");
      }
      setErrors({});
    } catch ({ response }) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
        // TODO : notification des erreurs
      }
    }
  };
  return (
    <>
      {(!editing && <h1>Création d'un membre</h1>) || (
        <h1>Modification d'un adhérent</h1>
      )}
      <form onSubmit={handelSubmit}>
        <div className="row">
          <div className="col-sm">
            <Field
              name="lastName"
              label="Nom de famille"
              placeholder=" Nom de famille de l'adhérent"
              value={customer.lastName.toUpperCase()}
              onChange={handelChange}
              error={errors.lastName}
            />
          </div>
          <div className="col-sm">
            <Field
              name="firstName"
              label="Prénom de famille"
              placeholder=" Prénom de l'adhérent"
              value={customer.firstName}
              onChange={handelChange}
              error={errors.firstName}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Field
              name="email"
              label="Email"
              placeholder=" Email de l'adhérent"
              type="email"
              value={customer.email}
              onChange={handelChange}
              error={errors.email}
            />
          </div>
          <div className="col-sm">
            <Field
              name="phoneNumber"
              label="Télephone"
              placeholder="Téléphone de l'adhérent"
              value={customer.phoneNumber}
              onChange={handelChange}
              error={errors.phoneNumber}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Field
              name="adress"
              label="Adresse"
              placeholder=" Adresse de l'adhérent"
              value={customer.adress}
              onChange={handelChange}
              error={errors.adress}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Field
              name="postalCode"
              label="Code postal"
              placeholder=" Code postal de l'adhérent"
              value={customer.postalCode}
              onChange={handelChange}
              error={errors.postalCode}
            />
          </div>
          <div className="col-sm">
            <Field
              name="town"
              label="Ville"
              placeholder=" Ville de l'adhérent"
              value={customer.town.toUpperCase()}
              onChange={handelChange}
              error={errors.town}
            />
          </div>
        </div>
        <hr />
        <p>Commentaires...</p>
        <textarea
          onChange={handelChange}
          placeholder="Commentaires"
          name="comment"
          id="comment"
          value={customer.comment}
          className="form-control"
        ></textarea>
        <div className="form-group">
          <button type="submit" className="btn btn-success mt-3 mr-3">
            Enregistrer
          </button>
          <Link to="/customers" className="btn btn-success mt-3">
            Retour à la liste
          </Link>
        </div>
      </form>
    </>
  );
};

export default CustomerPage;
