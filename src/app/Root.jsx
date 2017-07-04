import React from 'react';
import PropTypes from 'prop-types';

import TodoApp from './todo-app';

const Root = ({ items }) => (
  <div>
    <h1>Hello, SSR!</h1>
    <TodoApp items={items} />
  </div>
);

Root.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Root;
