import React from 'react';
import {BsCheck} from "react-icons/bs";
import {todoSlice} from "../../../redux/reducers/todoSlice";
import {useAppDispatch} from "../../../hooks/redux";

interface ICheck {
    isCompleted: boolean
    todoId: string
}

const Check = ({ isCompleted, todoId }: ICheck) => {
    const dispatch = useAppDispatch()
    const { completeTodo } = todoSlice.actions
    return (
        <div
            className={'border-2 rounded-md border-slate-800 w-6 h-6 flex items-center justify-center cursor-pointer ' +
                'hover:bg-green-400'}
            onClick={() => dispatch(completeTodo(todoId))}
        >
            {isCompleted && <BsCheck size={24} />}
        </div>
    );
};

export default Check;