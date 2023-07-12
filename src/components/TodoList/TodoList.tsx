import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import {useAppSelector} from "../../hooks/redux";
import Text from "../common-components/Text/Text";

const TodoList = () => {
    const { todos } = useAppSelector(state => state.todoReducer)
    return (
        <div className={'flex flex-col gap-y-2'}>
            {todos.length === 0 && <Text className={'text-center'}>Список задач пуст</Text>}
            {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodoList;