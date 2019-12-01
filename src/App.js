import React, { Fragment } from 'react';
import GlobalStyle from './helpers/GlobalStyle';
import Navbar from './../src/components/Navbar';
import Home from './pages/Home';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <Home />
  </Fragment>
);

export default App;