import React from 'react';
import { ItchatApplication, ItchatLogin } from './pages';
import { BrowserRouter as R, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <R>
      <Switch>
        <Route component={ItchatApplication} path='/@me' exact />
        <Route component={ItchatLogin} path='/login' exact />
      </Switch>
    </R>
  );
}
