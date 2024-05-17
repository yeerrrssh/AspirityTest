import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className='max-w-1494 mx-auto mb-32 min-h-screen'>
            {children}
        </div>
    );
};

export default Wrapper;