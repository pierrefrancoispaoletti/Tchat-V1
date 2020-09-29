// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from 'src/store/store';

import App from 'src/containers/App/App.container';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
