import React from 'react';
import {createPortal} from "react-dom";
import closeBtn from '../../img/exit.svg';
import Button from "../Button";

const modalPortal = document.getElementById('modal');

const Modal = ({children, setActive}) => {
    return createPortal(
        (
            <div className='fixed flex top-0 left-0 w-screen h-screen bg-modal-back justify-center items-center'>
                <div className='relative w-[824px] p-8 rounded-xl bg-bg-secondary space-y-10'>
                    {children}
                    <img className='cursor-pointer absolute top-[-2px] right-8' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
            </div>
        ), modalPortal
    );
};

export default Modal;