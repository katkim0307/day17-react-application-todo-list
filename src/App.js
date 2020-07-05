import React, {Component} from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [],
      newTask: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.delTask = this.delTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  };

  handleChange = (e) => {
    this.setState ({newTask: e.target.value})
  };

  addTask = (e) => {
    let {tasks, newTask}=this.state;

    e.preventDefault();
    if(newTask !== '') {
      // this.setState (prevState => {
      //   return {tasks: prevState.tasks.concat(newTask)}
      // })
      
      this.setState ({
        newTask: '',
        tasks: [...tasks, newTask]
      })
    }

    console.log(tasks);
  };

  updateTask = (txt, idx) => {
    let {tasks} = this.state;
    console.log('task:'+tasks);
    tasks.map((task, index) => {
      if(index === idx) {
        // console.log(index + '   ' + idx);
        tasks[idx] = txt;
      }
    });
    this.setState ({
      tasks: tasks
    });
  }

  delTask = (idx) => {
    const filteredTasks = this.state.tasks.filter((task, index) => {
      return index !== idx;
    });
    console.log(filteredTasks);
    this.setState ({tasks: filteredTasks});
  };

  render () {
    const {tasks, newTask} = this.state;
    return (
      <div className="container">
        <TodoForm handleChange={this.handleChange} addTask={this.addTask} newTask={newTask} />
        <TodoList tasks={tasks} delTask={this.delTask} updateTask={this.updateTask} />
      </div>
    )
  };
};

export default Todo;
