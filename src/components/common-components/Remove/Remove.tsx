import React from 'react';
import {AiFillDelete} from "react-icons/ai";
import {useAppDispatch} from "../../../hooks/redux";
import {todoSlice} from "../../../redux/reducers/todoSlice";
import {toast} from "react-toastify";

interface IRemove {
    todoId: string
}


const Remove = ({ todoId }: IRemove) => {

    const dispatch = useAppDispatch()
    const { removeTodo } = todoSlice.actions

    const handleRemove = () => {
        dispatch(removeTodo(todoId))
        toast('todo deleted')
    }

    return (
        <div
            className={'border-2 rounded-md border-slate-800 w-6 h-6 flex items-center justify-center cursor-pointer' +
                ' hover:bg-red-500'}
            onClick={handleRemove}
        >
            <AiFillDelete size={24}/>
        </div>
    );
};

export default Remove;