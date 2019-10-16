import axios from "axios";

function findAll() {
  return axios
    .get("http://localhost:8000/api/customers?order[lastName]=asc")
    .then(response => response.data["hydra:member"]);
}

function deleteCustomer(id) {
  return axios.delete("http://localhost:8000/api/customers/" + id);
}

function All2018() {
  return axios
    .get(
      "http://localhost:8000/api/customers?invoices.year=2018&order[lastName]=asc"
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
  delete: deleteCustomer,
  All2018,
  All2019
};
