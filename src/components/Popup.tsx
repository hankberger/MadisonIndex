import React from 'react';

const Popup = (
    {children,
     active}: 
    {
        children: React.ReactNode,
        active: boolean   
    }) => {

    let openStyle = active ? 'animate-popUp' : 'animate-popDown';
    return(
        <div className={`${openStyle} w-full h-64 bg-blue-500`}>
            {children}
        </div>
    )
}

export default Popup;