import React, {PropsWithChildren} from 'react';

interface ITitle extends PropsWithChildren {
    className?: string
}

const Title = ({ className, children }: ITitle) => {
    return (
        <h2 className={`text-4xl text-slate-800 text-center ${className ? className : ''}`}>
            {children}
        </h2>
    );
};

export default Title;