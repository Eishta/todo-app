import React from 'react';

const todos = ({ todoItem, onComplete, onReopen, onDelete }) => {
    const { id, todo, status } = todoItem;
    return (<li key={id} className={`todo-item ${status === 'Complete' ? 'red' : 'teal'}`}>
        <p className='todo'> {todo}</p>
        <div className='bttn-group'>
            <button className='bttn' onClick={() => onDelete(id)}>Delete</button>
            {status === 'Remaining' && <button className='bttn' onClick={() => onComplete(id)}>Complete</button>}
            {status === 'Complete' && <button className='bttn' onClick={() => onReopen(id)}>Re-open Task</button>}
        </div>

    </li>)
}
export default todos;