import React from 'react';
import {createPortal} from "react-dom";
import closeBtn from "../../img/exit.svg";

import {ReactComponent as YellowArrow} from "../../img/yellow-arrow-right.svg";
import {ReactComponent as RedArrow} from "../../img/red-arrow-right.svg";

const modalPortal = document.getElementById('modal');

const VacationModal = ({setActive, vacationData}) => {
    return createPortal (
        (
        <div className='fixed flex top-0 left-0 w-screen overflow-y-auto h-screen bg-modal-back md:justify-center md:items-center'>
            <div className='w-screen h-screen overflow-auto space-y-4 px-4 py-7.5 bg-bg-secondary xl:rounded-xl xl:space-y-10 xl:w-[962px] xl:px-7.5 xl:h-auto'>
                <div className='flex items-center justify-between'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-3xl'>История
                        отпусков</h5>
                    <img className='cursor-pointer' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
                <div className='hidden xl:flex w-full'>
                    <div className='w-full'>
                        <div className='px-2 py-4'>
                            <span className='font-normal text-base text-text-secondary'>Тип</span>
                        </div>
                        {vacationData.vacations.map(vacation =>
                            <div className='px-2 py-4 border-t border-border-primary'>
                                <span className='font-normal text-base text-text-primary'>{vacation.type}</span>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='px-2 py-4'>
                            <span className='font-normal text-base text-text-secondary'>Даты отпуска</span>
                        </div>
                        {vacationData.vacations.map(vacation =>
                            <div className='flex px-2 py-4 border-t border-border-primary space-x-2'>
                                <span className='font-normal text-base text-text-primary'>{vacation.start}</span>
                                {vacation.type === 'Отпуск' ? <YellowArrow/> : <RedArrow/>}
                                <span className='font-normal text-base text-text-primary'>{vacation.end}</span>
                            </div>
                        )}

                    </div>
                    <div className='w-fit'>
                        <div className='px-2 py-4'>
                            <span className='whitespace-nowrap font-normal text-base text-text-secondary'>Количество дней</span>
                        </div>
                        {vacationData.vacations.map(vacation =>
                            <div className='px-2 py-4 border-t border-border-primary text-right'>
                                    <span
                                        className='font-normal text-base text-text-primary'>{vacation.daysCount}</span>
                            </div>
                        )}
                    </div>
                </div>
                {vacationData.vacations.map(vacation =>
                    <div className='space-y-4 xl:hidden'>
                        <div className='w-full h-[1px] bg-border-primary'/>
                        <div className='flex flex-col space-y-2'>
                            <span className='font-normal text-base text-text-secondary'>Тип</span>
                            <span className='font-normal text-base text-text-primary'>{vacation.type}</span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <span className='font-normal text-base text-text-secondary'>Даты отпуска</span>
                            <div className='flex space-x-2'>
                                        <span
                                            className='font-normal text-base text-text-primary'>{vacation.start}</span>
                                {vacation.type === 'Отпуск' ? <YellowArrow/> : <RedArrow/>}
                                <span className='font-normal text-base text-text-primary'>{vacation.end}</span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <span className='font-normal text-base text-text-secondary'>Количество дней</span>
                            <span
                                className='font-normal text-base text-text-primary'>{vacation.daysCount}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>), modalPortal
    );
};

export default VacationModal;