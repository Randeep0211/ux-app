import React from 'react';
import styles from './tableRow.module.css';
import classNames from 'classnames';

interface DataProps {
  status: string;
  insured: string;
  object: string;
  country: string;
  product: string;
}

const TableRow: React.FC<DataProps> = ({
  status,
  insured,
  object,
  country,
  product,
}) => {
  return (
    <tr>
      <td>
        <button
          className={classNames([
            styles.button,
            status === 'DONE' && styles.done,
            status === 'FAIL' && styles.fail,
            status === 'CHECK' && styles.check,
          ])}
        >
          {status}
        </button>
      </td>

      <td>{insured}</td>
      <td>{object}</td>
      <td>{country}</td>
      <td>{product}</td>
    </tr>
  );
};

export default TableRow;
