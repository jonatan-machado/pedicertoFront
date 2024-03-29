import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const token = JSON.parse(localStorage.getItem('userToken'));

  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;

  RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  };

  RouteWrapper.defaultProps = {
    isPrivate: false
  };
}
