import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import invoicesAPI from "../services/invoicesAPI";
import { toast } from "react-toastify";
import TableLoader from "../components/loaders/TableLoader";

const TYPE_CLASSES = {
  TOTAL: "light",
  PARTIEL: "info",
  COMPLET: "light"
};
const CERTIF_CLASSES = {
  true: "light",
  false: "danger"
};

const CERTIF_LABELS = {
  true: "Oui",
  false: "Non"
};

const INVOICE_CLASSE = {
  OUI: "light",
  NON: "danger"
};

const InvoicesPagesSum = props => {
  const [invoices, setInvoices] = useState([]);
  const [total, setTotal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  //const [searchYear, setSearchYear] = useState("");

  const fetchInvoices = async () => {
    try {
      const data = await invoicesAPI.findAllSum();
      setInvoices(data);

      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };


  const d = new Date().getUTCFullYear();

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

  const handleDelete = async id => {
    const originalInvoices = [...invoices];
    setInvoices(invoices.filter(invoice => invoice.iId !== id));

    try {
      await invoicesAPI.delete(id);
      toast.success("La facture a été supprimée 🙂");
    } catch (error) {
      console.log(error.response);
      setInvoices(originalInvoices);
    }
  };
  const itemsPerPage = 30;

  // Gestion de la recherche
  const filteredInvoices = invoices.filter(
    c =>
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.Annee.toString() === search.toString() ||
      CERTIF_LABELS[c.medicalCertificate].toLowerCase() ===
        search.toLowerCase() ||
      c.insurance.toUpperCase() === search.toUpperCase()
    //c.amount.toLowerCase().startsWith(search.toLowerCase())
  );

  const tot = filteredInvoices => {
    setTotal(invoice.year);
  };

  // Pagination
  const paginatedInvoices = Pagination.getData(
    filteredInvoices,
    currentPage,
    itemsPerPage
  );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Liste des cotisations - {filteredInvoices.length}</h1>

        <Link className="btn btn-primary" to="/invoices/new">
          Créer une adhésion
        </Link>
      </div>
      <div className="jumbotron p-3">
        <div className="row">
          <p className="col-sm">
            <input
              type="text"
              onChange={handelSearch}
              value={search}
              className="form-control mt-2"
              placeholder="Rechercher un nom, une propriété ou une année..."
            />
          </p>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Adhérent</th>
            <th>Tél</th>
            <th>Mail</th>
            <th>Année</th>
            <th className="text-center">Doit</th>
            <th className="text-center">Tot. Réglé</th>
            <th className="text-center">Reste du</th>

            <th className="text-center">Certif</th>
            <th className="text-center">Assurance</th>
            <th className="text-center">Type</th>

            <th></th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {paginatedInvoices.map(invoice => (
              <tr key={invoice.iId}>
                <td>
                  <Link to={"/customers/" + invoice.id}>
                    {invoice.firstName} {invoice.lastName}
                  </Link>
                </td>
                <td>{invoice.phoneNumber}</td>
                <td>{invoice.email}</td>

                <td>
                  <span
                    className={
                      "badge badge-" +
                      ((d == invoice.Annee && "success") || "light")
                    }
                  >
                    {invoice.Annee}
                  </span>
                </td>
                <td className="text-center">{invoice.Doit} €</td>
                <td className="text-center">{invoice.Regle} €</td>

                <td className="text-center">
                  <span
                    className={
                      "badge badge-" +
                      ((invoice.Doit - invoice.Regle == 0 && "success") ||
                        "danger")
                    }
                  >
                    {invoice.Doit - invoice.Regle} €
                  </span>
                </td>

                <td className="text-center">
                  {" "}
                  <span
                    className={
                      "badge badge-" +
                      CERTIF_CLASSES[invoice.medicalCertificate]
                    }
                  >
                    {CERTIF_LABELS[invoice.medicalCertificate]}
                  </span>
                </td>
                <td className="text-center">
                  <span
                    className={
                      "badge badge-" + INVOICE_CLASSE[invoice.insurance]
                    }
                  >
                    {invoice.insurance}
                  </span>
                </td>
                <td className="text-center">
                  <span
                    className={
                      "badge badge-" + TYPE_CLASSES[invoice.subscriptionType]
                    }
                  >
                    {invoice.subscriptionType}
                  </span>
                </td>
                <td>
                  <Link
                    to={"/invoices/" + invoice.iId}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(invoice.iId)}
                    className="btn btn-sm btn-danger"
                  >
                    Suppr
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {loading && <TableLoader />}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChanged={handlePageChange}
        length={filteredInvoices.length}
      />
    </>
  );
};

export default InvoicesPagesSum;
