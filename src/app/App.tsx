import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';
import routes from '../routes';

export default function App() {
  return <Router history={history}>{routes}</Router>;
}
