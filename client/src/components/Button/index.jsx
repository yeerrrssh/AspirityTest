import React from 'react';

const Button = ({full, children}) => {
    return (
        <button className={`${full ? 'w-full' : ''} bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase`}>
            {children}
        </button>
    );
};

export default Button;