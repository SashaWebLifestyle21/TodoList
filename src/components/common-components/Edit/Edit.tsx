import React, {useState} from 'react';
import {GrEdit} from "react-icons/gr";
import {useAppDispatch} from "../../../hooks/redux";
import {ITodo, todoSlice} from "../../../redux/reducers/todoSlice";
import Modal from "../../Modal/Modal";
import Input from "../Input/Input";
import {toast} from "react-toastify";

interface IEdit {
    todo: ITodo
}

const Edit = ({ todo }: IEdit) => {

    const dispatch = useAppDispatch()
    const { updateTodo } = todoSlice.actions

    const [isOpen, setIsOpen] = useState(false)
    const [newText, setNewText] = useState<string>(todo.text)

    const handleUpdate = () => {
        dispatch(updateTodo({id: todo.id, text: newText}))
        setNewText(newText)
        setIsOpen(false)
        toast('todo updated')
    }

    return (
        <>
            <div
                className={'border-2 rounded-md border-slate-800 w-6 h-6 flex items-center justify-center cursor-pointer ' +
                    'hover:bg-amber-400'}
                onClick={() => setIsOpen(true)}
            >
                <GrEdit size={24} />
            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <Input
                    value={newText}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewText(e.currentTarget.value)}
                />
                <button
                    className={'block py-3 px-5 rounded-md mt-4 bg-violet-500 text-white m-auto hover:bg-violet-700'}
                    onClick={handleUpdate}
                >
                    Change
                </button>
            </Modal>
        </>
    );
};

export default Edit;