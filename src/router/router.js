import React from 'react';
import { Router, Switch } from 'react-router-dom';
import {history} from '../_helpers';
import {ComponentOne} from '../componentOne';
import {ComponentTwo} from '../componentTwo';
import { PageLayoutRoute } from './routeLayout';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PageLayoutRoute exact path="/" component={ComponentOne} />
          <PageLayoutRoute path="/component" component={ComponentTwo} />
          {/* <Route path="/comptwo" component={ComponentTwo} /> */}
        </Switch>
      </Router>
    );
  }
}
export { RouterComponent };