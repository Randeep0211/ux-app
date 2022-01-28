import React from 'react';
import styles from './contracts.module.css';

interface ContractProps {
  contracts: string;
  status: string;
}

const Contracts: React.FC<ContractProps> = ({ contracts, status }) => {
  return (
    <div className={styles.contractsContainer}>
      <h1 className={styles.h1}>{contracts}</h1>
      <h3 className={styles.h3}>{status}</h3>
    </div>
  );
};

export default Contracts;
