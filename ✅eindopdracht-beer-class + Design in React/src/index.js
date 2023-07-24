import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS
import $ from 'jquery';
import M from 'materialize-css/dist/js/materialize.min.js'; // Import Materialize JS
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize Materialize JS
$(document).ready(function() {
  M.AutoInit();
});

reportWebVitals();
