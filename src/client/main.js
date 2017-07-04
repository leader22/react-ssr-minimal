import React from 'react';
import { render } from 'react-dom';

import Root from '../app/root';

const state = window.__INITIAL_STATE__;

render(<Root {...state} />, document.querySelector('main'));
