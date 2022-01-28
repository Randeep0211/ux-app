import React from 'react';
import styles from './table.module.css';
import TableRow from './tableRow';

const Table = () => {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th>STATUS</th>
          <th>INSURED</th>
          <th>OBJECT</th>
          <th>COUNTRY</th>
          <th>PRODUCT</th>
        </tr>
      </thead>

      <tbody>
        <TableRow
          status="DONE"
          insured="Kate Winson"
          object="Civilian"
          country="Ukraine"
          product="Osago"
        />

        <TableRow
          status="FAIL"
          insured="Duglas"
          object="Transport"
          country="Ukraine"
          product="Casco"
        />

        <TableRow
          status="DONE"
          insured="Robert"
          object="Personal"
          country="Ukraine"
          product="Life insur"
        />

        <TableRow
          status="CHECK"
          insured="Antony Blues"
          object="Transport"
          country="Maldives"
          product="Casco"
        />

        <TableRow
          status="FAIL"
          insured="Rahul"
          object="Personal"
          country="Maldives"
          product="Casco"
        />
      </tbody>
    </table>
  );
};

export default Table;
