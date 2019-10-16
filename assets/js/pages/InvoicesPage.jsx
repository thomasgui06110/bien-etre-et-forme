import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import invoicesAPI from "../services/invoicesAPI";
import { STATUS_CODES } from "http";
import { isUndefined } from "util";

const TYPE_CLASSES = {
  TOTAL: "success",
  PARTIEL: "info",
  COMPLET: "success"
};
const CERTIF_CLASSES = {
  true: "success",
  false: "danger"
};

const CERTIF_LABELS = {
  true: "Oui",
  false: "Non"
};

const InvoicesPage = props => {
  const [invoices, setInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchYear, setSearchYear] = useState("");

  const fetchInvoices = async () => {
    try {
      const data = await invoicesAPI.findAll();
      setInvoices(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  //Filtre les adhérents qui n'ont pas de certif
  const notCertif = async () => {
    try {
      await invoicesAPI.notCertif().then(data => setInvoices(data));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handelSearch = ({ currentTarget }) => {
    setSearch(currentTarget.value);

    setCurrentPage(1);
  };
  const handelSearchYear = ({ currentTarget }) => {
    setSearchYear(currentTarget.value);
    setCurrentPage(1);
  };

  // Suppression des factures

  // const handleDelete = async id => {
  //   const originalInvoices = [...invoices];

  //   setInvoices(invoices.filter(invoice => invoice.id !== id));

  //   // 2. Approche pessimiste
  //   try {
  //     await invoicesAPI.delete(id);
  //   } catch (error) {
  //     console.log(error.response);
  //     setInvoices(originalInvoices);
  //   }
  // };

  const handleDelete = async id => {
     const originalInvoices = [...invoices];
     setInvoices(invoices.filter(invoice => invoice.id !== id));

     try {
       await invoicesAPI.delete(id);
     } catch (error) {
      console.log(error.response);
      setInvoices(originalInvoices);
     }
  }
  const itemsPerPage = 10;

  // Gestion de la recherche
  const filteredInvoices = invoices.filter(
    c =>
      c.customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.customer.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.year.toString().includes(search.toString())
  );

  // Pagination
  const paginatedInvoices = Pagination.getData(
    filteredInvoices,
    currentPage,
    itemsPerPage
  );

  return (
    <>
      <h1>Liste des factures</h1>
      <div className="jumbotron p-3">
        <button
          id="nonSolde2018"
          onClick={() => nonSolde2018()}
          className="btn btn-sm btn-primary"
        >
          Pas d'assurance
        </button>
        <button
          id="notCertif"
          onClick={() => notCertif()}
          className="btn btn-sm btn-primary ml-1"
        >
          Pas de certif. médic.
        </button>
        <button
          id="nonSolde2018"
          onClick={() => nonSolde2019()}
          className="btn btn-sm btn-primary ml-1"
        >
          Complète
        </button>
        <button
          id="Solde"
          onClick={() => Solde2019()}
          className="btn btn-sm btn-primary ml-1"
        >
          Partiel
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
        <div className="row">
          <p className="col-sm">
            <input
              type="text"
              onChange={handelSearch}
              value={search}
              className="form-control mt-2"
              placeholder="Rechercher un nom ou une année..."
            />
          </p>
          {/*  <p className="col-sm">
            <input
              type="text"
              onChange={handelSearchYear}
              value={searchYear}
              className="form-control mt-2"
              placeholder="Rechercher une année..."
            /> 
          </p>*/}
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Adhérent</th>
            <th>Tél</th>
            <th>Mail</th>
            <th>Année</th>
            <th className="text-center">Montant</th>
            <th className="text-center">Inscription</th>

            <th className="text-center">Certif</th>
            <th className="text-center">Assurance</th>
            <th className="text-center">Type</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedInvoices.map(invoice => (
            <tr key={invoice.id}>
              <td>
                <a href="#">
                  {invoice.customer.firstName} {invoice.customer.lastName}
                </a>
              </td>
              <td>
                <a href="#">{invoice.customer.phoneNumber}</a>
              </td>
              <td>
                <a href="#">{invoice.customer.email}</a>
              </td>

              <td>
                <span className="badge badge-light">{invoice.year}</span>
              </td>
              <td className="text-center">
                {invoice.amount.toLocaleString()} €
              </td>
              <td className="text-center">{invoice.subscription} €</td>
              <td className="text-center">
                <span
                  className={
                    "badge badge-" + CERTIF_CLASSES[invoice.medicalCertificate]
                  }
                >
                  {CERTIF_LABELS[invoice.medicalCertificate]}
                </span>
              </td>
              <td className="text-center">
                <span className={"badge badge-light"}>Non</span>
              </td>
              <td className="text-center">
                {" "}
                <span
                  className={
                    "badge badge-" + TYPE_CLASSES[invoice.subscriptionType]
                  }
                >
                  {invoice.subscriptionType}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-primary mr-1">
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(invoice.id)}
                  className="btn btn-sm btn-danger"
                >
                  Suppr
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChanged={handlePageChange}
        length={filteredInvoices.length}
      />
    </>
  );
};

export default InvoicesPage;
