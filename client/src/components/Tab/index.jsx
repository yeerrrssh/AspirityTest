import React from 'react';

const Tab = ({changeToggle, text, isSelected}) => {
    return (
        <button
            className={`px-4 py-2.5 font-semibold text-sm uppercase ${isSelected ? ' border-b-2 border-border-accent text-text-primary' : ' text-text-secondary'}`}
            onClick={changeToggle}
        >
            {text}
        </button>
    );
};

export default Tab;