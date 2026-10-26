import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageRoutes } from './routes/PageRoutes.jsx';
import { Navigation } from './components/navigation.jsx';


import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <div style={{ padding: '20px' }}>
        <PageRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App
