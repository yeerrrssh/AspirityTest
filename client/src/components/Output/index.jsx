import React from 'react';
import {useForm} from "react-hook-form";

const Output = ({label, name, value, type}) => {
    const {
        register,
    } = useForm();

    return (
        <div className='relative'>
            <label className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'>
                {label}
            </label>
            <input className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                   type={type}
                   name={name}
                   value={value}
                   disabled={true}
            />
        </div>
    );
};

export default Output;