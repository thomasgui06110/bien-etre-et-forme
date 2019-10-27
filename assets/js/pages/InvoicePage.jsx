import React, { useState, useEffect } from "react";
import Field from "../components/forms/Fields";
import Select from "../components/forms/Select";
import { Link } from "react-router-dom";
import CustomerAPI from "../services/customersAPI";
import { toast } from "react-toastify";
import InvoiceAPI from "../services/invoicesAPI";
import TableLoader from "../components/loaders/TableLoader";

const InvoicePage = ({ history, match }) => {
  const { id = "new" } = match.params;
  const [invoice, setInvoice] = useState({
    amount: 0,
   
    customer: "0",
    year: "",
    subscription: 0,
    medicalCertificate: "0",
    subscriptionType: "COMPLET",
    insurance: "NON",
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0
  });

  const [customers, setCustomers] = useState([]);

  const [editing, setEditing] = useState(false);

  const [errors, setErrors] = useState({
    amount: "",
    customer: "",
    subscription: "",
    year: "",
    subscription: "",
    medicalCertificate: "",
    subscriptionType: "",
    insurance: "",
    january: "",
    february: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: ""
  });
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const data = await CustomerAPI.findAll();
      setCustomers(data);
      if (!invoice.customer) setInvoice({ ...invoice, customer: data[0].id });
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  const CERTIF_LABELS = {
    true: "Oui",
    false: "Non"
  };
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Récupération d'une facture
  const fetchInvoice = async id => {
    try {
      const {
        amount,
        year,
        customer,
        subscription,
        medicalCertificate,
        subscriptionType,
        insurance,
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
      } = await InvoiceAPI.find(id);

      setInvoice({
        amount,
        year,
        customer: customer.id,
        subscription,
        medicalCertificate,
        subscriptionType,
        insurance,
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december
      });
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchInvoice(id);
    }
  }, [id]);

  const handelChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (editing) {
        await InvoiceAPI.update(id, invoice);
        // TODO NOTIFS SUCCESS
        toast.success("La facture a été mise à jour 🙂");
      } else {
        await InvoiceAPI.create(invoice);
        // TO DO NOTIFIACATION SUCCESS
        toast.success("La facture a été crée 😏");
        history.replace("/invoices");
      }
    } catch ({ response }) {
      console.log(response);
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
        toast.error("La facture n'a pas étée sauvegardée 😈");
        // TODO : notification des erreurs
      }
    }
  };

  let regle =
    parseFloat(invoice.january) +
    parseFloat(invoice.february) +
    parseFloat(invoice.march) +
    parseFloat(invoice.april) +
    parseFloat(invoice.may) +
    parseFloat(invoice.june) +
    parseFloat(invoice.july) +
    parseFloat(invoice.august) +
    parseFloat(invoice.september) +
    parseFloat(invoice.october) +
    parseFloat(invoice.november) +
    parseFloat(invoice.december);
  let total = parseFloat(invoice.amount) + parseFloat(invoice.subscription);
  let reste = total - regle;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        {(editing && <h1>Modification d une adhésion</h1>) || (
          <h1>Création d'une adhésion</h1>
        )}

        <Link to="/customers/new" className="btn btn-primary">
          Créer un adhérent
        </Link>
      </div>
      {loading && <TableLoader />}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <Select
            name="customer"
            label="Adherent"
            value={invoice.customer}
            error={errors.customer}
            onChange={handelChange}
          >
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>
                {customer.lastName} {customer.firstName}
              </option>
            ))}
          </Select>

          <div className="row">
            <div className="col-sm">
              <Field
                name="year"
                type="number"
                placeholder="Année de l'adhésion"
                label="Année"
                onChange={handelChange}
                value={invoice.year}
                error={errors.year}
              />
            </div>
            <div className="col-sm">
              <Field
                name="amount"
                type="number"
                placeholder="Montant de la cotisation"
                label="Cotisation"
                onChange={handelChange}
                value={invoice.amount}
                error={errors.amount}
              />
            </div>
            <div className="col-sm">
              <Field
                name="subscription"
                type="number"
                placeholder="Frais d'adhésion"
                label="Frais d'adhésion"
                onChange={handelChange}
                value={invoice.subscription}
                error={errors.subscription}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Select
                name="medicalCertificate"
                label="Certificat médical"
                value={invoice.medicalCertificate}
                error={errors.medicalCertificate}
                onChange={handelChange}
              >
                <option value="1">OUI</option>
                <option value="0">NON</option>
              </Select>
            </div>
            <div className="col-sm">
              <Select
                name="subscriptionType"
                label="Type d'adhésion"
                value={invoice.subscriptionType}
                error={errors.subscriptionType}
                onChange={handelChange}
              >
                <option value="COMPLET">TOTAL</option>
                <option value="PARTIEL">PARTIEL</option>
              </Select>
            </div>
            <div className="col-sm">
              <Select
                name="insurance"
                label="Assurance"
                value={invoice.insurance}
                error={errors.insurance}
                onChange={handelChange}
              >
                <option value="OUI">OUI</option>
                <option value="NON">NON</option>
              </Select>
            </div>
          </div>
          <hr />
          <h2>Echéancier de paiement</h2>
          <div className="row mt-2">
            <div className="col-sm">
              <Field
                name="january"
                type="number"
                placeholder="Janvier "
                label="Janvier"
                onChange={handelChange}
                value={invoice.january}
                error={errors.january}
              />
            </div>
            <div className="col-sm">
              <Field
                name="february"
                type="number"
                placeholder="Février "
                label="Février"
                onChange={handelChange}
                value={invoice.february}
                error={errors.february}
              />
            </div>
            <div className="col-sm">
              <Field
                name="march"
                type="number"
                placeholder="Mars "
                label="Mars"
                onChange={handelChange}
                value={invoice.march}
                error={errors.march}
              />
            </div>
            <div className="col-sm">
              <Field
                name="april"
                type="number"
                placeholder="Avril "
                label="Avril"
                onChange={handelChange}
                value={invoice.april}
                error={errors.april}
              />
            </div>
            <div className="col-sm">
              <Field
                name="may"
                type="number"
                placeholder="Mai "
                label="Mai"
                onChange={handelChange}
                value={invoice.may}
                error={errors.may}
              />
            </div>
            <div className="col-sm">
              <Field
                name="june"
                type="number"
                placeholder="Juin "
                label="Juin"
                onChange={handelChange}
                value={invoice.june}
                error={errors.june}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Field
                name="july"
                type="number"
                placeholder="Juillet "
                label="Juillet"
                onChange={handelChange}
                value={invoice.july}
                error={errors.july}
              />
            </div>
            <div className="col-sm">
              <Field
                name="august"
                type="number"
                placeholder="Août "
                label="Août"
                onChange={handelChange}
                value={invoice.august}
                error={errors.august}
              />
            </div>
            <div className="col-sm">
              <Field
                name="september"
                type="number"
                placeholder="Septembre "
                label="Septembre"
                onChange={handelChange}
                value={invoice.september}
                error={errors.september}
              />
            </div>
            <div className="col-sm">
              <Field
                name="october"
                type="number"
                placeholder="Octobre "
                label="Octobre"
                onChange={handelChange}
                value={invoice.october}
                error={errors.october}
              />
            </div>
            <div className="col-sm">
              <Field
                name="november"
                type="number"
                placeholder="Novembre "
                label="Novembre"
                onChange={handelChange}
                value={invoice.november}
                error={errors.november}
              />
            </div>
            <div className="col-sm">
              <Field
                name="december"
                type="number"
                placeholder="Décembre "
                label="Décembre"
                onChange={handelChange}
                value={invoice.december}
                error={errors.december}
              />
            </div>
          </div>
          <hr />
          <div className="row mb-4">
            <div className="col-sm">
              <label>Total réglé </label>
              <input
                className="form-control"
                type="number"
                value={regle}
                readOnly
              />
            </div>
            <div className="col-sm">
              <label>Total à régler </label>
              <input
                className="form-control"
                label="Total à régler"
                type="number"
                value={total}
                readOnly
              />
            </div>
            <div className="col-sm">
              <label>Reste à régler </label>
              <input
                className="form-control"
                type="number"
                value={reste}
                readOnly
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Enregistrer
            </button>
            <Link to="/invoices/sum" className="btn btn-link">
              Retour aux factures
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default InvoicePage;
