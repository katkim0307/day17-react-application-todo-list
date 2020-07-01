import React, {Component} from 'react';

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
        console.log(index + '   ' + idx);
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
        <form onSubmit={this.addTask}>
          <label htmlFor="taskName" />
          <input onChange={this.handleChange} value={newTask} name="taskName" type="text" placeholder= "Add a new task!"/>
          <button type="submit">add</button>
        </form>
        <ul>
          {tasks.map((item, idx) => {
            return (
              <li key={idx}>
                <input type="text" value={item} onChange ={(e) => this.updateTask(e.target.value, idx)} />
                <button type="button" onClick={() => this.delTask(idx)}>del</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  };
};

export default Todo;
