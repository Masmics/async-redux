// import React from 'react';
// import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { logger } from './logger';
// import App from './components/App';

// render(
//   <App />,
//   document.getElementById('root')
// );

export default createStore(
  applyMiddleware(logger)
);
