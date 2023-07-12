import React, {PropsWithChildren} from 'react';

interface ILayout extends PropsWithChildren{

}

const Layout = ({ children }: ILayout) => {
    return (
        <div className={'bg-sky-100 h-screen pt-[50px]'}>
            {children}
        </div>
    );
};

export default Layout;