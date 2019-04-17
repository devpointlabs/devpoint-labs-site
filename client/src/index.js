import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware, } from 'devise-axios';
import ScrollToTop from './ScrollTop';
// import './index.css'

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter >
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);


