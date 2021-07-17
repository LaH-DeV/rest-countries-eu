import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 import Header from './components/Header';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Header />
      <Route exact path = "/">
      <Countries />
      </Route>
      <Route path="/countries/:name" children={<CountryDetails/>}>
      </Route>
      <Footer />
    </Router>
  )
}

export default App;
