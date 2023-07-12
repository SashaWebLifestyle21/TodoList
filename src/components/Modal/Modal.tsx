import React, {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import CloseBtn from "../common-components/CloseBtn/CloseBtn";

interface IModal extends PropsWithChildren {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ isOpen, setIsOpen, children }: IModal) => {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 ${isOpen ? 'flex justify-center items-center' : 'hidden'}`}>
            <div className="block bg-white p-[20px] rounded-md min-w-[250px] w-3/4 relative flex items-center justify-center">
                <CloseBtn onClick={() => setIsOpen(false)} />
                {children}
            </div>
        </div>
    );
};

export default Modal;