import React from 'react';
import { render } from 'react-dom';

import Root from '../app/root';

const initialState = window.__INITIAL_STATE__;
if (initialState === null) {
  fetch('/data')
    .then(res => res.json())
    .then(state => {
      render(<Root {...state} />, document.querySelector('main'));
    });
} else {
  render(<Root {...initialState} />, document.querySelector('main'));
}

