import React from 'react';
// import PropTypes from 'prop-types';

import TodoApp from './todo-app';

const Root = () => (
  <div>
    <h1>Hello, SSR!</h1>
    <TodoApp />
  </div>
);

Root.propTypes = {
};

export default Root;
