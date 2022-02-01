import React, { Suspense } from 'react';
import './App.css';
import Contracts from './components/contracts';
import Search from './components/search';
import Table from './components/table';
import Table1 from './components/table1';
import { rowData } from './data.js';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Contracts
        contracts="My contracts"
        status="Current Status of contracts"
      />
      <div className="container">
        <Search placeholder="Search" />

        {/* <Table
    //     // rowData={rowData}
    //     /> */}
        <Routes>
          <Route path="/:id" element={<Table1 />}></Route>
          <Route path="/" element={<Table />}></Route>
        </Routes>
        {/* <Table1 /> */}
      </div>
    </div>
  );
}

export default App;
