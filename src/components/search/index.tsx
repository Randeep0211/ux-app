import React, { useState } from 'react';
import styles from './search.module.css';
import { useNavigate } from 'react-router-dom';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const [query, setQuery] = useState<string>();

  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/${query}`);
  };
  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Search;
