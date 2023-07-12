import React from 'react';
import Check from "../common-components/Check/Check";
import Text from "../common-components/Text/Text";
import Remove from "../common-components/Remove/Remove";
import Edit from "../common-components/Edit/Edit";
import {ITodo} from "../../redux/reducers/todoSlice";

interface ITodoItem {
    todo: ITodo
}

const TodoItem = ({ todo }: ITodoItem) => {
    return (
        <div className={`p-5 rounded-md border-slate-500 border-2 flex items-center gap-x-3
            w-3/4 m-auto ${todo.isCompleted ? 'bg-green-300' : 'bg-violet-500'}`}
        >
            <Check
                isCompleted={todo.isCompleted}
                todoId={todo.id}
            />
            <Text
                className={`w-11/12 ${todo.isCompleted ? 'line-through' : ''}`}
            >
                {todo.text}
            </Text>
            <Edit todo={todo} />
            <Remove todoId={todo.id}  />
        </div>
    );
};

export default TodoItem;