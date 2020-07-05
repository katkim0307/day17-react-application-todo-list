import React from 'react'

const TodoList = (props) => {
    const {tasks, delTask, updateTask} = props;
    return (
        <ul>
            {tasks.map((item, idx) => {
                return (
                    <li key={idx}>
                        <input type="text" value={item} onChange={e => updateTask(e.target.value, idx)} />
                        <button type="button" onClick={() => delTask(idx)}>del</button>
                    </li>
                )
            })}
        </ul>
    );
} ;

export default TodoList;