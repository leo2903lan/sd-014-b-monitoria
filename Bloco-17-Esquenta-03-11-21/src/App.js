/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './App.css';
import UserList from './components/UserList';
import Organizacao from './pages/Organizacao';

function App() {
  return (
    <>
      App
      <Organizacao />
      <UserList />
    </>
  );
}

export default App;
