import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import '@popperjs/core/dist/umd/popper.min.js'; */
import 'bootstrap/dist/js/bootstrap.min.js';

import './bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
