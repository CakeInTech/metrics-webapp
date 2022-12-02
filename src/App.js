import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './sass/App.scss';
import Countries from './components/Country';
import Details from './components/Details';
import Navbars from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
