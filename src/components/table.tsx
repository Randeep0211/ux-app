import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './table.module.css';
import TableRow from './tableRow';
import { rowData } from '../data.js';
import Loading from './loading';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface DataProps {
  // rowData: {
  //   status: string;
  //   country: string;
  //   insured: string;
  //   object: string;
  //   product: string;
  // }[];
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Table = ({}) => {
  const [data, setData] = React.useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await axios.get(url);
      setLoading(false);
      setData(data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
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

        {data.map((el, index) => (
          <TableRow
            key={index}
            userId={el.userId}
            id={el.id}
            title={el.title}
            body={el.body}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
