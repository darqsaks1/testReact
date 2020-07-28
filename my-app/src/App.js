import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from '../src/components/header/Header'
import Employees from '../src/components/employees/Employees'
import MainPage from '../src/components/main-page/MainPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
      </BrowserRouter  >

    </div>
  );
}

export default App;
