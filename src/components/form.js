import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [todo, setTodo] = useState('');
    const { addTodo } = props;
    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('')
    }
    return (<form className='form' onSubmit={submitHandler}>
        <label>TODO: </label>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add todo here...' />
        <input type='submit' value='Add Todo' />
    </form>)
}

export default Form;