import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'

import './styles/reset.css';
import './styles/index.css';
import './styles/utils.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
