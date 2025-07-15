import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
