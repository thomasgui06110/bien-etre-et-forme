import axios from "axios";

function findAll() {
  return axios
    .get("http://localhost:8000/api/invoices?order[year]=desc&order[customer.lastName]=asc")
    .then(response => response.data["hydra:member"]);
}

function deleteInvoices(id) {
    
  return axios.delete("http://localhost:8000/api/invoices/" + id);
}

function notCertif() {
  return axios
    .get(
      "http://localhost:8000/api/invoices?medicalCertificate=false&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}

function All2019() {
  return axios
    .get(
      "http://localhost:8000/api/customers?invoices.year=2019&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}



export default {
  findAll: findAll,
  delete: deleteInvoices,
  notCertif,
  All2019
};
