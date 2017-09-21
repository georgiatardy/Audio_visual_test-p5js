import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/styles.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout'
import About from './components/About';
import Home from './components/Home';


  ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </BaseLayout>

</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
