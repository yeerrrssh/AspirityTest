import React from 'react';
import {createPortal} from "react-dom";

import closeBtn from "../../img/exit.svg";

const modalPortal = document.getElementById('modal');

const PersonalModal = ({setActive, personalData}) => {
    return createPortal((
        <div
            className='fixed flex top-0 left-0 w-screen overflow-y-auto h-screen bg-modal-back md:justify-center md:items-center'>
            <div
                className='w-screen h-screen overflow-auto space-y-4 px-4 py-7.5 bg-bg-secondary xl:rounded-xl xl:space-y-10 xl:w-[962px] xl:px-7.5 xl:h-auto'>
                <div className='flex items-center justify-between'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-3xl'>Персональные
                        данные</h5>
                    <img className='cursor-pointer' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
                
            </div>
        </div>), modalPortal
    );
};

export default PersonalModal;