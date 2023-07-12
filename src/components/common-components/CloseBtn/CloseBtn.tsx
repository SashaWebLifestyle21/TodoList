import React from 'react';
import {AiOutlineClose} from "react-icons/ai";

interface ICloseBtn {
    onClick?: () => void
}

const CloseBtn = ({ onClick }: ICloseBtn) => {
    return (
        <button
            className={'absolute top-[5px] right-[5px]'}
            onClick={onClick}
        >
            <AiOutlineClose size={24}/>
        </button>
    );
};

export default CloseBtn;