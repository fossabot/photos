import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './components';

render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'));
