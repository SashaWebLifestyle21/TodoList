import React from 'react';

interface IInput {
    value?: string | number
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

const Input = ({ onChange, placeholder, value, className }: IInput) => {
    return (
        <input
            className={`p-2 max-w-3xl w-[100%] border border-slate-500 bg-slate-300 rounded-md ${className ? className : ''}`}
            type={'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;