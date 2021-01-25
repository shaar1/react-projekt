import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import Form from "./Form";
import "./style.css";


class App extends React.Component {
  state = {
    tasks: ["task 1", "task 2", "task 3"],
    completedCount: 0
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task], completedCount: this.state.completedCount });
  }

  handleDelete = (index) => {
    const tasks = [...this.state.tasks];
    const completedCount = this.state.completedCount + 1;
    tasks.splice(index, 1);
    this.setState({ tasks, completedCount });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} completedCount={this.state.completedCount} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Form onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
