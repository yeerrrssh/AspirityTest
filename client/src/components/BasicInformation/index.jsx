import React, {useState} from 'react';

import BasicInfoBlock from "../BasicInfoBlock";
import Modal from "../Modal";
import TeamInfo from "../TeamInfo";
import Button from "../Button";

import {ReactComponent as BlueArrow} from "../../img/arrow-right.svg";
import directorsAvatar from "../../img/avatar-director.png";
import teamAvatar1 from "../../img/team-avatar-1.png";
import teamAvatar2 from "../../img/team-avatar-2.png";
import teamAvatar3 from "../../img/team-avatar-3.png";
import teamAvatar4 from "../../img/team-avatar-4.png";
import teamAvatar5 from "../../img/team-avatar-5.png";
import teamAvatar6 from "../../img/team-avatar-6.png";
import teamAvatar7 from "../../img/team-avatar-7.png";


const BasicInformation = () => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <>
        <div className='w-full space-y-4 xl:flex xl:space-x-4 xl:space-y-0'>
            <div className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl xl:w-820 xl:px-7.5 xl:space-y-10'>
                <BasicInfoBlock heading={'Персональная информация'} isFirst={true}/>
                <BasicInfoBlock heading={'Подразделение'} isFirst={true}/>
                <BasicInfoBlock heading={'Контакты'} isFirst={true}/>
            </div>
            <div className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl h-fit xl:w-658 xl:px-7.5 xl:space-y-10'>
                <div className='flex justify-between items-center'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>Загрузка сотрудника</h5>
                    <p className='font-semibold text-sm text-accent-orange'>100%</p>
                </div>

                <div className='w-full space-y-4 xl:space-y-10'>
                    <div className='space-y-4 xl:flex xl:space-x-[124px] xl:space-y-0'>
                        <div className='space-y-2'>
                            <p className='font-normal text-base text-text-tertiary'>Название проекта</p>
                            <p className='font-normal text-base text-text-primary'>MedPoint 24</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='font-normal text-base text-text-tertiary'>Тип проекта</p>
                            <p className='font-normal text-base text-text-primary'>Коммерческий</p>
                        </div>
                    </div>
                    <div className='space-y-4 xl:flex xl:space-x-[86px] xl:space-y-0'>
                        <div className='space-y-2'>
                            <p className='font-normal text-base text-text-tertiary'>Ответственный</p>
                            <div className='flex space-x-2 items-center'>
                                <img src={directorsAvatar} alt="director's avatar"/>
                                <p className='font-normal text-base text-text-primary'>Анна Кузнецова</p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <p className='font-normal text-base text-text-tertiary'>Команда</p>
                            <div className='flex space-x-2 items-center'>
                                <div className='flex space-x-[-12px]'>
                                    <img src={teamAvatar1} alt="Avatar"/>
                                    <img src={teamAvatar2} alt="Avatar"/>
                                    <img src={teamAvatar3} alt="Avatar"/>
                                    <img src={teamAvatar4} alt="Avatar"/>
                                    <img src={teamAvatar5} alt="Avatar"/>
                                    <img src={teamAvatar6} alt="Avatar"/>
                                    <img src={teamAvatar7} alt="Avatar"/>
                                </div>
                                <p
                                    className='font-normal text-text-primary text-base cursor-pointer'
                                    onClick={() => setIsModalActive(true)}
                                >
                                    +2
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-base text-text-tertiary'>Сроки работы</p>
                        <div className='flex space-x-2'>
                            <p className='font-normal text-base text-text-secondary'>03 марта 2023</p>
                            <BlueArrow/>
                            <p className='font-normal text-base text-text-secondary'>23 марта 2023</p>
                        </div>
                    </div>
                </div>

                <div className='flex w-full'>
                    <Button full={true}>Посмотреть всю загрузку</Button>
                </div>
            </div>
        </div>
            {isModalActive &&
                <Modal setActive={setIsModalActive}>
                    <TeamInfo/>
                </Modal>
            }
        </>
    );
};

export default BasicInformation;