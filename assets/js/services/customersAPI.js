import axios from "axios";
import Cache from "./cache";
import { CUSTOMERS_API } from "../config";

async function findAll() {
  const cachedCustomers = await Cache.get("customers");
  if (cachedCustomers) return cachedCustomers;
  return axios
    .get(CUSTOMERS_API + "?order[lastName]=asc")
    .then(response => {
      const customers = response.data["hydra:member"];
      Cache.set("customers", customers);
      return customers;
    });
}

function find(id) {
  return axios
    .get(CUSTOMERS_API + "/" + id)
    .then(response => response.data);
}

function deleteCustomer(id) {
  return axios.delete(CUSTOMERS_API + "/" + id);
}

function All2018() {
  return axios
    .get(
      CUSTOMERS_API + "?invoices.year=2018&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}

function All2019() {
  return axios
    .get(
      CUSTOMERS_API + "?invoices.year=2019&order[lastName]=asc"
    )
    .then(response => response.data["hydra:member"]);
}

function update(id, customer) {
  return axios
    .put(CUSTOMERS_API + "/" + id, customer)
    .then(async response => {
      const cachedCustomers = await Cache.get("customers");

      if (cachedCustomers) {
        const index = cachedCustomers.findIndex(c => c.id === +id);
        cachedCustomers[index] = response.data;
      }
      return response;
    });
}

function create(customer) {
  return axios
    .post(CUSTOMERS_API, customer)
    .then(async response => {
      const cachedCustomers = await Cache.get("customers");

      if (cachedCustomers) {
        Cache.set("customers", [...cachedCustomers, response.data]);
      }
    });
}

export default {
  findAll: findAll,
  delete: deleteCustomer,
  All2018,
  All2019,
  find,
  update,
  create
};
