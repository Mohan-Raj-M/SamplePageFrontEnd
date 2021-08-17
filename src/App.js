import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import './App.css';
import Routes from './routes/Routes';
import Context from './reusables/context/Context';

function App() {
  return (
    <ToastProvider>
      <Context>
        <Router>
          <Routes />
        </Router>
      </Context>
    </ToastProvider>
  );
}

export default App;
