import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

require('style-loader!../scss/main.scss')

let root = document.getElementById('root');
render(<App />, root);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => render(<App />, root));
}