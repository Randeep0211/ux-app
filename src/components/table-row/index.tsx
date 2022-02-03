import React from 'react';
// import axios from 'axios';
// import styles from './tableRow.module.css';
// import classNames from 'classnames';

interface DataProps {
  // status: string;
  // insured: string;
  // object: string;
  // country: string;
  // product: string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

const TableRow: React.FC<DataProps> = ({
  // status,
  // insured,
  // object,
  // country,
  // product,
  userId,
  id,
  title,
  body,
}) => {
  return (
    // <tr>
    //   <td>
    //     <button
    //       className={classNames([
    //         styles.button,
    //         status === 'DONE' && styles.done,
    //         status === 'FAIL' && styles.fail,
    //         status === 'CHECK' && styles.check,
    //       ])}
    //     >
    //       {status}
    //     </button>
    //   </td>

    //   <td>{insured}</td>
    //   <td>{object}</td>
    //   <td>{country}</td>
    //   <td>{product}</td>
    // </tr>

    <tr>
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default TableRow;
