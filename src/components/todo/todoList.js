import React from 'react';
import Todo from './todo';
import '../../styles/todo.css';

const TodoList = ({todoList, onReopen, onDelete, onComplete, filter})=> {
    const list = filter === ''? todoList : todoList.filter(todo=> todo.status === filter)
    return (<ul className='todo-list'>
        {list.map(((todo)=> <Todo todoItem={todo} onComplete={onComplete} onReopen = {onReopen} onDelete={onDelete}/>))}
    </ul>)
}

export default TodoList;