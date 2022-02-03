import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './card.module.css';

import Loading from '../../components/loading/index';
import { useParams } from 'react-router-dom';

interface DataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function ContractDetail() {
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!!loading || !data ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={styles.cardContainer}>
          <div> UserId: {data.userId}</div>
          <div>Id: {data.id}</div>
          <div>Tittle: {data.title}</div>
          <div>Body: {data.body}</div>
        </div>
      )}
    </>
  );
}

export default ContractDetail;
