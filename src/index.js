import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import '../src/styles/emi-calc.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import CalculatorWrap from './Components/CalculatorWrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CalculatorWrap />
  </React.StrictMode>
);
reportWebVitals();
