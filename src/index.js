import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './config/Routes'
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
