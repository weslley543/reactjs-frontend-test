import React from 'react';
import Auth from '../pages/Auth';
import App from '../pages/App';
import { Switch } from 'react-router-dom';
import Route from './Route';
const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Auth} />
    <Route path='/chamada' component={App} isPrivate />
  </Switch>
);
export default Routes;
