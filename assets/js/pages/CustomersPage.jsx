import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import CustomersAPI from "../services/customersAPI";
import { Link } from "react-router-dom";
import TableLoader from "../components/loaders/TableLoader";
import jwtDecode from "jwt-decode";

const CustomersPage = props => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState([]);
  // Permet d'aller récupérer les customers
  const fetchCustomers = async () => {
    try {
      const data = await CustomersAPI.findAll();
      setCustomers(data);
      // console.log(customers);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  // Au chargement du composant, on va chercher les customers
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Filtre Payées ou pas
  const all2018 = async () => {
    try {
      await CustomersAPI.All2018().then(data => setCustomers(data));
    } catch (error) {
      console.log(error.response);
    }
  };
  const all2019 = () => {
    CustomersAPI.All2019()
      .then(data => setCustomers(data))
      .catch(error => console.log(error.response));
  };
  const nonSolde2018 = () => {
    CustomersAPI.All2018()
      .then(data => setCustomers(data.filter(customer => customer.rest !== 0)))
      //.then(data => setCustomers(data.filter(customer => customer[invoices.year] ===2019)))
      .catch(error => console.log(error.response));
  };

  const Solde2018 = () => {
    CustomersAPI.All2018()
      .then(data => setCustomers(data.filter(customer => customer.rest === 0)))
      .catch(error => console.log(error.response));
  };
  const nonSolde2019 = () => {
    CustomersAPI.All2019()
      .then(data => setCustomers(data.filter(customer => customer.rest !== 0)))
      .catch(error => console.log(error.response));
  };

  const Solde2019 = () => {
    CustomersAPI.All2019()
      .then(data => setCustomers(data.filter(customer => customer.rest === 0)))
      .catch(error => console.log(error.response));
  };

  //
  const handleDelete = async id => {
    

    const originalCustomers = [...customers];

    // 1. Approche optimiste
    setCustomers(customers.filter(customer => customer.id !== id));

    // 2. Approche pessimiste
    try {
      await CustomersAPI.delete(id);
    } catch (error) {
      setCustomers(originalCustomers);
      console.log(error.response);
    }
  };

  const handelPageChange = page => {
    setCurrentPage(page);
  };

  const handelSearch = ({ currentTarget }) => {
    setSearch(currentTarget.value);
    setCurrentPage(1);
  };

  const itemsPerPage = 30;
  
  const filteredCustomers = customers.filter(
    c =>
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.town.toLowerCase().includes(search.toLowerCase())
     
     
  );

  // d'ou on part pendant combien
  const paginatedCustomers = Pagination.getData(
    filteredCustomers,
    //customers,
    currentPage,
    itemsPerPage
  );

  function roleUser() {
    const token = window.localStorage.getItem("authToken");

    if (token) {
      const { exp: expiration } = jwtDecode(token);

      if (expiration * 1000 > new Date().getTime()) {
        const { roles: roles } = jwtDecode(token);
       
        setRole("");
        setRole(roles);
      }
    } else {
      console.log("plus de token")
    }
  }
  useEffect(() => {
    roleUser();
  }, []);
 
  return (
    <>
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <h1>Liste des Adhérents</h1> 
        {(role != "ROLE_USER") && (
          <Link to="/customers/new" className="btn btn-primary">
            Créer un adhérent
          </Link>
        )}
      </div>
      <div className="jumbotron p-3">
        <input
          type="text"
          onChange={handelSearch}
          value={search}
          className="form-control mt-2"
          placeholder="Rechercher un nom, une ville..."
        />
      </div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID.</th>
            <th>Adhérent(e)</th>
            <th>Email</th>
            <th>Tél</th>
            <th className="text-center">Adresse</th>
            <th className="text-center">CP - Ville</th>
            <th className="text-center">?</th>

            <th></th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {paginatedCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  <Link to={"/customers/" + customer.id}>
                     {customer.firstName.charAt(0).toUpperCase() + customer.firstName.substring(1).toLowerCase() } {customer.lastName.toUpperCase()}
                  </Link>
                </td>
                <td>{customer.email}</td>
                <td>{customer.phoneNumber}</td>
                <td className="text-center">{customer.adress}</td>

                <td className="text-center">
                  {customer.postalCode} {customer.town.toUpperCase()}
                </td>
                <td className="text-center">
                  <span className="btn btn-sm btn-outline-light"></span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(customer.id)}
                    disabled={customer.invoices.length > 0}
                    className="btn btn-sm btn-danger"
                  >
                    Supprimer
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {loading && <TableLoader />}
      {itemsPerPage < filteredCustomers.length && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          length={filteredCustomers.length}
          onPageChanged={handelPageChange}
        />
      )}
    </>
  );
};

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);
};

export default CustomersPage;
