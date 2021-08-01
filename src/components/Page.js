import React from "react";
import TodoList from './todo/todoList';
import Form from "./form";
import Filters from "./Filters";

const Page = (props) => {
    const method =()=>{}
    const { addTodo=method, filter='', onFilterClick=method, todoList=[], onComplete=method, onDelete=method, onReopen=method } = props;
    return (
        <div className='page'>
            <Form addTodo={addTodo} />
            <Filters filter={filter} onFilterClick={onFilterClick} />
            <TodoList
                todoList={todoList}
                onComplete={onComplete}
                onReopen={onReopen}
                onDelete={onDelete}
                filter={filter} />
        </div>
    )
}

export default Page;