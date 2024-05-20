import React, {useState} from 'react';
import {ReactComponent as Info} from "../../img/info.svg";
import {ReactComponent as GreenDot} from "../../img/green-dot.svg";
import {ReactComponent as YellowDot} from "../../img/yellow-dot.svg";
import {ReactComponent as RedDot} from "../../img/red-dot.svg";
import {ReactComponent as YellowArrow} from "../../img/yellow-arrow-right.svg";
import {ReactComponent as RedArrow} from "../../img/red-arrow-right.svg";

import DoughnutChart from "../DoughnutChart";
import VacationModal from "../VacationModal";


const VacationInformation = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const vacationData = {
        available: 32,
        planned: 8,
        used: 4,
        vacations: [
            {
                type: 'Отпуск',
                start: '03 марта 2023',
                end: '23 марта 2023',
                daysCount: 20,
            },
            {
                type: 'Отгул',
                start: '01 марта 2023',
                end: '03 марта 2023',
                daysCount: 3,
            },
            {
                type: 'Отгул',
                start: '11 мая 2023',
                end: '15 мая 2023',
                daysCount: 4,
            },
            {
                type: 'Отпуск',
                start: '01 марта 2023',
                end: '12 марта 2023',
                daysCount: 12,
            },
            {
                type: 'Отгул',
                start: '17 февраля 2023',
                end: '21 февраля 2023',
                daysCount: 5,
            },
            {
                type: 'Отгул',
                start: '12 февраля 2023',
                end: '12 февраля 2023',
                daysCount: 1,
            },
            {
                type: 'Отгул',
                start: '7 января 2023',
                end: '16 января 2023',
                daysCount: 10,
            },
        ],
    }
    const shortData = vacationData.vacations.slice(0, 5);
    console.log(shortData);

    const dayDesc = (daysNum) => {
        let desc = '';
        if (daysNum % 10 === 1 && daysNum !== 11){
            desc = 'день';
        } else if (daysNum % 10 >= 2 && daysNum % 10 <= 4 && daysNum < 12 || daysNum >= 14) {
            desc = 'дня';
        } else {
            desc = 'дней';
        }
        return desc;
    }


    return (
        <>
            <div className='w-full space-y-4 xl:flex xl:space-x-4 xl:space-y-0'>
                <div className='w-full space-y-4 px-4 py-7.5 bg-bg-secondary rounded-xl xl:w-[516px] xl:px-7.5'>
                    <div className='flex space-x-2 items-center'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>Статистика</h5>
                        <div onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}
                             onClick={() => setShowInfo(!showInfo)} className='flex'>
                            <Info/>
                        </div>
                        {showInfo &&
                            <div className='px-2.5 py-1.5 bg-bg-modal rounded items-center mb-[-12px] xl:mb-[-4px]'>
                                <span
                                    className='font-medium text-sm text-text-primary'>1 раб. месяц = 3 дня отпуска</span>
                            </div>
                        }
                    </div>
                    <div className='flex w-full justify-center text-center'>
                        <DoughnutChart available={vacationData.available} planned={vacationData.planned}
                                       used={vacationData.used}/>
                    </div>
                    <div className='space-y-2'>
                        <div
                            className='flex px-2.5 py-3 border rounded-2xl border-border-primary justify-between transition hover:border-icons-primary'>
                            <div className='flex space-x-2 items-center'>
                                <GreenDot/>
                                <span
                                    className='font-normal text-text-primary text-base select-none'>Доступно сейчас</span>
                            </div>
                            <span
                                className='font-normal text-text-primary text-base'>{vacationData.available + ' ' + dayDesc(vacationData.available)}</span>
                        </div>
                        <div
                            className='flex px-2.5 py-3 border rounded-2xl border-border-primary justify-between transition hover:border-icons-primary'>
                            <div className='flex space-x-2 items-center'>
                                <YellowDot/>
                                <span
                                    className='font-normal text-text-primary text-base select-none'>Запланировано</span>
                            </div>
                            <span
                                className='font-normal text-text-primary text-base'>{vacationData.planned + ' ' + dayDesc(vacationData.planned)}</span>
                        </div>
                        <div
                            className='flex px-2.5 py-3 border rounded-2xl border-border-primary justify-between transition hover:border-icons-primary'>
                            <div className='flex space-x-2 items-center'>
                                <RedDot/>
                                <span
                                    className='font-normal text-text-primary text-base select-none'>Использовано/недоступно</span>
                            </div>
                            <span
                                className='font-normal text-text-primary text-base'>{vacationData.used + ' ' + dayDesc(vacationData.used)}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full space-y-4 px-4 py-7.5 bg-bg-secondary rounded-xl xl:w-[962px] xl:px-7.5'>
                    <div className='flex items-center justify-between'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>История
                            отпусков</h5>
                        <button className='text-sm text-text-tertiary' onClick={() => setIsModalActive(true)}>Посмотреть
                            все
                        </button>
                    </div>
                    <div className='hidden xl:flex w-full'>
                    <div className='w-full'>
                            <div className='px-2 py-4'>
                                <span className='font-normal text-base text-text-secondary'>Тип</span>
                            </div>
                            {shortData.map(vacation =>
                                <div className='px-2 py-4 border-t border-border-primary'>
                                    <span className='font-normal text-base text-text-primary'>{vacation.type}</span>
                                </div>
                            )}
                        </div>
                        <div className='w-full'>
                            <div className='px-2 py-4'>
                                <span className='font-normal text-base text-text-secondary'>Даты отпуска</span>
                            </div>
                            {shortData.map(vacation =>
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
                            {shortData.map(vacation =>
                                <div className='px-2 py-4 border-t border-border-primary text-right'>
                                    <span
                                        className='font-normal text-base text-text-primary'>{vacation.daysCount}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    {shortData.map(vacation =>
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
            </div>
            {isModalActive &&
                <VacationModal setActive={setIsModalActive} vacationData={vacationData}/>
            }
        </>
    );
};

export default VacationInformation;