import React, {PropsWithChildren} from 'react';

interface IText extends PropsWithChildren {
    className?: string
}

const Text = ({ className, children }: IText) => {
    return (
        <p className={`text-xl text-gray-800 ${className ? className : ''}`}>
            {children}
        </p>
    );
};

export default Text;