import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import CustomersAPI from "../services/customersAPI";
import { async } from "q";

const CustomersPage = props => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
 
  // Permet d'aller récupérer les customers
  const fetchCustomers = async () => {
    try {
      const data = await CustomersAPI.findAll();
      setCustomers(data);
    } catch(error) {
      console.log(error.response)
    }
  }

// Au chargement du composant, on va chercher les customers
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Filtre Payées ou pas
  const all2018 = async () => {
    try {
     await  CustomersAPI.All2018()
        .then(data => setCustomers(data))
    }
      catch(error) {
        console.log(error.response)
      };
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
    console.log(id);

    const originalCustomers = [...customers];

    // 1. Approche optimiste
    setCustomers(customers.filter(customer => customer.id !== id));

    // 2. Approche pessimiste
    try {
      await CustomersAPI.delete(id)
    } catch(error) {
      setCustomers(originalCustomers);
      console.log(error.response);
    }
    
  };

  const handelPageChange = page => {
    setCurrentPage(page);
  };

  const handelSearch = ({currentTarget}) => {
    setSearch(currentTarget.value);
    setCurrentPage(1);
  };

  const itemsPerPage = 10;

  const filteredCustomers = customers.filter(
    c =>
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase())
  );

  // d'ou on part pendant combien
  const paginatedCustomers = Pagination.getData(
    filteredCustomers,
    //customers,
    currentPage,
    itemsPerPage
  );

  return (
    <>
      <h1>Liste des Adhérents</h1>
      <div className="jumbotron p-3">
        <button
          id="nonSolde2018"
          onClick={() => nonSolde2018()}
          className="btn btn-sm btn-primary"
        >
          Non soldés 2018
        </button>
        <button
          id="Solde"
          onClick={() => Solde2018()}
          className="btn btn-sm btn-primary ml-1"
        >
          Soldés 2018
        </button>
        <button
          id="nonSolde2018"
          onClick={() => nonSolde2019()}
          className="btn btn-sm btn-primary ml-1"
        >
          Non soldés 2019
        </button>
        <button
          id="Solde"
          onClick={() => Solde2019()}
          className="btn btn-sm btn-primary ml-1"
        >
          Soldés 2019
        </button>
        <button
          className="btn btn-sm btn-primary ml-1"
          onClick={() => all2018()}
        >
          Tous les adhérents 2018
        </button>
        <button
          className="btn btn-sm btn-primary ml-1"
          onClick={() => all2019()}
        >
          Tous les adhérents 2019
        </button>
        <input
          type="text"
          onChange={handelSearch}
          value={search}
          className="form-control mt-2"
          placeholder="Rechercher un nom..."
        />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Adhérent(e)</th>
            <th>Email</th>
            <th>Tél</th>
            <th className="text-center">Doit</th>
            <th className="text-center">Réglé 2019</th>
            <th className="text-center">Reste 2019</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                <a href="#">
                  {customer.firstName} {customer.lastName}
                </a>
              </td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td className="text-center">
                <span className="badge badge-light">
                  {customer.totalAmount.toLocaleString()} €
                </span>
              </td>
              <td className="text-center">
                {customer.totalPaid.toLocaleString()} €
              </td>
              <td className="text-center">
                <span className="btn btn-sm btn-outline-danger">
                  {customer.rest.toLocaleString()} €
                </span>
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
      </table>
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
