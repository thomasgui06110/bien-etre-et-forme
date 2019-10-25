import axios from "axios";
import { INVOICES_API } from "../config";

function findAll() {
  return axios
    .get(INVOICES_API + "?order[year]=desc&order[customer.lastName]=asc")
    .then(response => response.data["hydra:member"]);
}

function findAllSum() {
  return axios
    .get(INVOICES_API + "/sum?order[year]=desc&order[customer.lastName]=asc")
    .then(response => response.data);
}

function findAllStats() {
  return axios
    .get(API_URL + "stats")
    //.get("http://localhost:8000/api/stats")
    .then(response => response.data);
}

function deleteInvoices(id) {
    
  return axios.delete(INVOICES_API + "/" + id);
}

function notCertif() {
  return axios
    .get(
      INVOICES_API + "?medicalCertificate=false&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}
// function nbAdherents() {
 
//   return axios
//     .get(
//       "http://localhost:8000/api/invoices?year=2020"
//     )
//     .then(response => response.data["hydra:totalItems"]);
// }


function All2019() {
  return axios
    .get(
     INVOICES_API + "?invoices.year=2019&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}

function find(id) {
  return  axios
  .get(INVOICES_API + "/" + id)
  .then(response => response.data);
}

function update(id, invoice) {
  return axios.put(
    INVOICES_API + "/" + id,
    { ...invoice, customer: `/api/customers/${invoice.customer}` }
  );
}

function create(invoice) {
  return axios.post(
    INVOICES_API,
    {
      ...invoice,
      customer: `/api/customers/${invoice.customer}`
    }
  )
}

function ip() {
  return fetch("https://api.ipify.org?format=json")
  .then(resultat => resultat.json())
  .then(json => json.ip);
}

export default {
  findAll: findAll,
  delete: deleteInvoices,
  notCertif,
  All2019,
  find,
  update,
  create,
  ip,
  findAllSum,
  findAllStats
};
