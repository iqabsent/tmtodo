import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('<App />', () => {
  it('deep renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
