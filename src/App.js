import React from 'react';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
// import { Card } from './components';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросcовки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
