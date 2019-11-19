import React, { Fragment } from 'react';
import './App.css';
import 'normalize.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

const App: React.FC = () => {
  return (
      <Fragment>
          <Header />
          <Home />
      </Fragment>
  )
};

export default App;
