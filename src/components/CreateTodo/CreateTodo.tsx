import React, {useState} from 'react';
import Input from "../common-components/Input/Input";
import AddBtn from "../common-components/AddBtn/AddBtn";
import {useAppDispatch} from "../../hooks/redux";
import uuid from "react-uuid";
import {ITodo, todoSlice} from "../../redux/reducers/todoSlice";
import {toast} from "react-toastify";

const CreateTodo = () => {
    const dispatch = useAppDispatch()
    const { createTodo } = todoSlice.actions

    const [text, setText] = useState<string>('')

    const handleCreateTodo = () => {
        if(text) {
            const newTodo: ITodo = {
                id: uuid(),
                text,
                dateCreate: {
                    day: new Date().getDay() + 2,
                    month: new Date().getMonth() + 1,
                    year: new Date().getFullYear()
                },
                isCompleted: false
            }
            dispatch(createTodo(newTodo))
            setText('')
            toast('todo created')
        } else toast.warning('input is empty')
    }

    const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <div className={'w-3/4 mx-auto bg-violet-200 mb-2 p-6 rounded-md flex items-center gap-x-2'}>
            <Input
                value={text}
                onChange={handleInputText}
                placeholder={'Text todo ...'}
            />
            <AddBtn onClick={handleCreateTodo} />
        </div>
    );
};

export default CreateTodo;