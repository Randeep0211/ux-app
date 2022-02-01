import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './table.module.css';
import TableRow from './tableRow';
import Loading from './loading';
import { useParams } from 'react-router-dom';

interface DataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Table1 = () => {
  const [data, setData] = React.useState<DataProps>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(data);
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
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>

      <tbody>
        {data && (
          <TableRow
            userId={data.userId}
            id={data.id}
            title={data.title}
            body={data.body}
          />
        )}
      </tbody>
    </table>
  );
};

export default Table1;
