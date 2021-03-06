import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import createStore from './reducers';

import AppHeader from './components/AppHeader';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

import './styles/index.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
