import React from 'react';

const todos = ({ todoItem, onComplete, onReopen, onDelete }) => {
    const { id, todo, status } = todoItem;
    return (<li key={id} className={`todo-item ${status === 'Complete' ? 'red' : 'teal'}`}>
        <p className='todo'> {todo}</p>
        <div className='bttn-group'>
            <div onClick={() => onDelete(id)}>
                <i class="fas fa-trash-alt d-block d-sm-none"></i>
                <button className='bttn d-none d-sm-block' >Delete</button>
            </div>

            {status === 'Remaining' &&
            <div onClick={() => onComplete(id)}>
                 <i class="far fa-check-square d-block d-sm-none"></i>
                 <button className='bttn d-none d-sm-block'>Complete</button>
            </div>
               }
            {status === 'Complete' && 
            <div onClick={() => onReopen(id)}>
                 <i class="fas fa-redo-alt d-block d-sm-none"></i>
                 <button className='bttn d-none d-sm-block'>Re-open Task</button>
            </div>
                }
        </div>

    </li>)
}
export default todos;