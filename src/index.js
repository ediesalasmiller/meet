import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
// serviceWorkerRegistration.unregister();

reportWebVitals();

atatus.config('7a0d2f9725384b75a825d907f008e36b').install();
