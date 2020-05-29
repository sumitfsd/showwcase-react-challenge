import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Homepage from '../containers/Homepage';
import Qualifications from '../containers/Qualifications';
import { ROUTES } from '../constant';

const route = (
  <Switch>
    <Route path={ROUTES.HOMEPAGE} exact component={Homepage} />
    <Route path={ROUTES.QUALIFICATIONS} exact component={Qualifications} />
    <Route
      path={`${ROUTES.QUALIFICATIONS}/:qualificationId`}
      exact
      component={Qualifications}
    />
    <Redirect from="/*" to={ROUTES.HOMEPAGE} />
  </Switch>
);

export default route;
