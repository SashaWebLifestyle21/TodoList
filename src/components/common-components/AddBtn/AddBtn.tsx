import React, {PropsWithChildren} from 'react';
import {AiOutlinePlus} from "react-icons/ai";

interface IButton extends PropsWithChildren {
    className?: string
    onClick?: () => void
}

const AddBtn = ({ onClick, className, children }: IButton) => {
    return (
        <button
            className={`border-2 rounded-full border-slate-800 w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-violet-700`}
            onClick={onClick}
        >
            <AiOutlinePlus />
        </button>
    );
};

export default AddBtn;