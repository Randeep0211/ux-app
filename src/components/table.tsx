import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './table.module.css';
import TableRow from './tableRow';
// import { rowData } from '../data.js';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface RowDataProps {
  // rowData: {
  //   status: string;
  //   country: string;
  //   insured: string;
  //   object: string;
  //   product: string;
  // }[];
}

const Table: React.FC<RowDataProps> = ({}) => {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          {/* <th>STATUS</th>
          <th>INSURED</th>
          <th>OBJECT</th>
          <th>COUNTRY</th>
          <th>PRODUCT</th> */}

          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>

      <tbody>
        {/* {rowData.map((el, index) => (
          <TableRow
            key={index}
            status={el.status}
            country={el.country}
            insured={el.insured}
            object={el.object}
            product={el.product}
          />
        ))} */}

        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
