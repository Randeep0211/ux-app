import React from 'react';
import './App.css';
import ContractList from './pages/contract-list';
// import Table1 from './pages/contract-list/table1';
import ContractDetail from './pages/contract-detail';
// import { rowData } from './data.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Table
    //     // rowData={rowData}
    //     /> */}
        <Routes>
          <Route path="/" element={<ContractList />}></Route>
          <Route path="/:id" element={<ContractDetail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
