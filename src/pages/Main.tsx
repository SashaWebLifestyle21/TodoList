import React from 'react';
import Title from "../components/common-components/Title/Title";
import TodoList from "../components/TodoList/TodoList";
import CreateTodo from "../components/CreateTodo/CreateTodo";

const Main = () => {
    return (
        <div className={'w-3/4 mx-auto'}>
            <Title className={'mb-2'}>Todo App</Title>
            <CreateTodo />
            <TodoList />
        </div>
    );
};

export default Main;