import React from 'react';

const Input = ({label, id, value, type, isDisabled}) => {
    return (
        <form className='relative'>
            <label className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'>
                {label}
            </label>
            <input className='w-full min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                   type={type}
                   id={id}
                   value={value}
                   disabled={isDisabled}
            />
        </form>
    );
};

export default Input;