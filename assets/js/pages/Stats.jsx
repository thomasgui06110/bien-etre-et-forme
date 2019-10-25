import React, { useEffect, useState } from "react";
import TableLoader from "../components/loaders/TableLoader";
import { Link } from "react-router-dom";
import invoicesAPI from "../services/invoicesAPI";

const Stats = props => {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    try {
      const data = await invoicesAPI.findAllStats();
      console.log(data);
      setStats(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <h1>Statistiques</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Année</th>
            <th>Total abonnements</th>
            <th>Total frais</th>
            <th className="font-weight-bold">Total</th>
            <th>Nb Adhérents</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr key={stat.id}>
              <td>{stat.Annee}</td>
              <td className="">{parseFloat(stat.Total).toFixed(2).toLocaleString()} €</td>
              <td>{parseFloat(stat.Frais).toFixed(2)} €</td>
              <td className="font-weight-bold text-danger">{parseFloat(stat.Frais) + parseFloat(stat.Total)} €</td>
              <td>{stat.NbAd} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Stats;
