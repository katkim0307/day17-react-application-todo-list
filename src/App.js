import React, {Component} from 'react';

class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [],
      newTask: '',
    }
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

  delTask = (idx) => {
    const filteredTasks = this.state.tasks.filter((task, index) => {
      return index !== idx;
    });
    console.log(filteredTasks);
    this.setState ({tasks: filteredTasks});
  };

  render () {
    const {tasks} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.addTask}>
          <label htmlFor="taskName" />
          <input onChange={this.handleChange} name="taskName" type="text" placeholder= "Add a new task!"/>
          <button type="submit">add</button>
        </form>
        <ul>
          {tasks.map((item, idx) => {
            return (
              <li key={idx}>
                {item}
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
