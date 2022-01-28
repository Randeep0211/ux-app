import React from 'react';
import styles from './search.module.css';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <input className={styles.searchBox} type="text" placeholder={placeholder} />
  );
};

export default Search;
