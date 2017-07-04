import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ items }) => (
  <ul>
    { items.map(item => (
    <li key={item.id}>{item.text}</li>
    )) }
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
