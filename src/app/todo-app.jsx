import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './todo-list';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      text: '',
    };

    this.handleChange = ev => {
      this.setState({text: ev.target.value});
    };

    this.handleSubmit = ev => {
      ev.preventDefault();

      const newItem = {
        text: this.state.text,
        id: Date.now()
      };

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    };
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

TodoApp.defaultProps = {
  items: [],
};

TodoApp.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TodoApp;
