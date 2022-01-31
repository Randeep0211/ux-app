import React from 'react';
import './App.css';
import Contracts from './components/contracts';
import Search from './components/search';
import Table from './components/table';
import { rowData } from './data.js';

function App() {
  return (
    <div className="App">
      <Contracts
        contracts="My contracts"
        status="Current Status of contracts"
      />
      <div className="container">
        <Search placeholder="Search" />
        <Table
        // rowData={rowData}
        />
      </div>
    </div>
  );
}

export default App;
