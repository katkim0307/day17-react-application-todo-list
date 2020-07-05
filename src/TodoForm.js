import React from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
    const {handleChange, addTask, newTask} = props;
    return (
        <form id="todo-form" onSubmit={addTask}>
            <label htmlFor="taskName" />
            <input 
            onChange={handleChange} 
            name="taskName" 
            type="text" 
            value={newTask}
            placeholder="Add new task!" />
            <button type="submit">add</button>
        </form>
    );
};

export default TodoForm;