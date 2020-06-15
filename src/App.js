import React from 'react';
import './App.css';
import Todo from './components/Todo'
import Done from './components/Done'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: [
        {
          name: 'Todo Item 1',
        },
        {
          name: 'Todo Item the second',
        },
        {
          name: 'The REAL todo item',
        }
      ],
      inputVal: '',

      done: [
        
      ],
      removed: [

      ]
    }
  }
  handleChange = (e) => {
    this.setState({inputVal: e.target.value}, () => {
      console.log(this.state.inputVal)
    }); 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {name: this.state.inputVal}
    console.log(newTodo);
    let newTodos = [...this.state.todos, newTodo];
    this.setState({todos: newTodos}, () => {
      console.log(this.state)
    })
  }
  done = (indexToRemove) => {
    console.log("Hello")
    const newTodos = this.state.todos.filter((todo, index) => {
      return index != indexToRemove;
    })
    let newDone = [...this.state.done, this.state.todos[indexToRemove]]
    this.setState({todos: newTodos, done: newDone}, () => {
      console.log(newTodos);
    })
  }
  remove = (indexToRemove) => {
    console.log("Hello")
    const removed = this.state.done.filter((done, index) => {
      return index != indexToRemove;
    })
    this.setState({done: removed}, () => {
      console.log(removed);
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <h2>Add Task</h2>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.inputVal} onChange={this.handleChange}></input>
            <button type="submit">Add todo</button>
          </form>
        </div>
        {/* <div className="div">

        </div> */}
        <label>Todo list</label>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <Todo name={todo.name} key={index} done={() => this.done(index)}/>
          })}
        </ul>
        <ul>
          <label>Completed todos</label>
          {this.state.done.map((done, index) => {
            return <Done name={done.name} key={index} removed={() => this.remove(index)}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
