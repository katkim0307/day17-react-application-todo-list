import React from 'react';
import './TodoList.css';
import FlipMove from 'react-flip-move';

const TodoList = (props) => {
    const {tasks, delTask, updateTask} = props;
    const taskItems = tasks.map((item, idx) => {
        return (
            <div className="list" key={idx}>
                <p>
                    <input type="text" value={item} onChange={e => updateTask(e.target.value, idx)} />
                    <button type="button" onClick={() => delTask(idx)}>del</button>
                </p>
            </div>
        )
    })

    return (
        <div>
            <FlipMove duration={200} easing="ease-in-out">
                {taskItems}
            </FlipMove>
        </div>
    )

    // return (
    //     <ul className="list">
    //         {tasks.map((item, idx) => {
    //             return (
    //                 <li key={idx}>
    //                     <input type="text" value={item} onChange={e => updateTask(e.target.value, idx)} />
    //                     <button type="button" onClick={() => delTask(idx)}>del</button>
    //                 </li>
    //             )
    //         })}
    //     </ul>
    // );
} ;

export default TodoList;