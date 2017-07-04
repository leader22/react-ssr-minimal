import React from 'react';
import PropTypes from 'prop-types';

import TodoApp from './todo-app';

const Root = ({
  title,
  items,
}) => (
  <div>
    <h1>{title}</h1>

    <TodoApp items={items} />

    <h3>Author</h3>
    <a href="https://twitter.com/leader22">
      <img src="./doseisan.jpg" width={150} height={150} />
      <p>@leader22</p>
    </a>
  </div>
);

Root.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Root;
