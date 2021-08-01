import React from "react";
import TodoList from './todo/todoList';
import Form from "./form";
import Filters from "./Filters";
import Page from './Page';
import { filter } from "minimatch";

class TodoClass extends React.Component {
    state = {
        todoList: [],
        filter: ''
    }
    generateRandomId() {
        return Math.random().toString().slice(2);
    }
    addTodo = (todo) => {
        if (todo && todo !== '') {
            let toDo = {
                id: this.generateRandomId(),
                todo: todo,
                status: 'Remaining'
            }
            let newList = [...this.state.todoList, toDo]
            this.setState({ todoList: newList })
        }
    }
    onDeleteHandler = (id) => {
        let newTodoList = this.state.todoList.filter(todo => todo.id !== id)
        this.setState({ todoList: newTodoList });
    }
    onCompleteHandler = id => {
        let newList = this.state.todoList.map(todo => todo.id === id ? { ...todo, status: 'Complete' } : todo);
        this.setState({ todoList: newList });
    }
    onReopenHandler = id => {
        let newList = this.state.todoList.map(todo => todo.id === id ? { ...todo, status: 'Remaining' } : todo);
        this.setState({ todoList: newList });
    }
    onFilterClick = (name) => {
        this.setState({ filter: name })
    }
    render() {
        return <Page addTodo={this.addTodo}
            filter={this.state.filter}
            onFilterClick={this.onFilterClick}
            todoList={this.state.todoList}
            onComplete={this.onCompleteHandler}
            onReopen={this.onReopenHandler}
            onDelete={this.onDeleteHandler}
        />
    }
}

export default TodoClass;