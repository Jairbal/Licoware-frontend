import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Entrar from './pages/Entrar';
import Facturas from './pages/Facturas';
import Inventario from './pages/Inventario';
import Proveedores from './pages/Proveedores';

function App() {
  const [titlePage, setTitlePage] = useState('');
  return (
    
    <BrowserRouter>
      <Switch>
        <Layout titlePage={titlePage} Route={Route} >
          <Route exact path="/entrar" render={(props) => <Entrar {...props} setTitlePage={setTitlePage}/>} />
          <Route exact path="/" render={(props) => <Home {...props} setTitlePage={setTitlePage} />} />
          <Route exact path="/facturas" render={(props) => <Facturas {...props} setTitlePage={setTitlePage} />} />
          <Route exact path="/inventario" render={(props) => <Inventario {...props} setTitlePage={setTitlePage} />} />
          <Route exact path="/proveedores" render={(props) => <Proveedores {...props} setTitlePage={setTitlePage} />} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
