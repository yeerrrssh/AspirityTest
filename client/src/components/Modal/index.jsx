import React from 'react';
import {createPortal} from "react-dom";
import closeBtn from '../../img/exit.svg';

const modalPortal = document.getElementById('modal');

const Modal = ({header, children, setActive}) => {
    return createPortal(
        (
            <div className='fixed flex top-0 left-0 w-screen h-screen bg-modal-back justify-center items-center'>
                <div className='w-[824px] p-8 rounded-xl bg-bg-secondary space-y-10'>
                    <div className='flex justify-between'>
                        <h5>{header}</h5>
                        <img onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                    </div>
                    {children}
                </div>
            </div>
        ), modalPortal
    );
};

export default Modal;