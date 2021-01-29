import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NewsList from './Components/News/NewsList';
import NewsForm from './Components/News/NewsForm';
import Navbar from './Components/NavBar/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import './index.css';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <div className="contain p-4">
    <Switch>
      <Route exact path="/" component = {NewsList}/>
      <Route path="/news-form" component = {NewsForm}/>
      <Route path="/update/:id" component = {NewsForm}/>
    </Switch>
    <ToastContainer/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

