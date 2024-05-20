import React from 'react';
import {createPortal} from "react-dom";
import closeBtn from '../../img/exit.svg';

const modalPortal = document.getElementById('modal');

const Modal = ({children, setActive}) => {
    return createPortal(
        (
            <div className='fixed flex top-0 left-0 w-screen h-screen bg-modal-back md:justify-center md:items-center'>
                <div className='relative w-screen h-screen bg-bg-secondary p-8 space-y-6 xl:space-y-10 md:w-[824px] md:h-auto md:rounded-xl'>
                    {children}
                    <img className='cursor-pointer absolute top-[-2px] right-8' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
            </div>
        ), modalPortal
    );
};

export default Modal;