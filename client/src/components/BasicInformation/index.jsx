import React, {useContext, useEffect, useState} from 'react';
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
import Output from "../Output";
import PersonalModal from "../PersonalModal";
import DivisionModal from "../DivisionModal";
import ContactsModal from "../ContactsModal";
import {Context} from "../../index";


const BasicInformation = ({changePersonalData, changeDivisionData}) => {
    const {data} = useContext(Context);

    const [isTeamModalActive, setIsTeamModalActive] = useState(false);
    const [isPersonalModalActive, setIsPersonalModalActive] = useState(false);
    const [isDivisionModalActive, setIsDivisionModalActive] = useState(false);
    const [isContactsModalActive, setIsContactsModalActive] = useState(false);

    const [personalInfo, setPersonalInfo] = useState(data.personalData);
    const [divisionInfo, setDivisionInfo] = useState(data.divisionData);
    const [contactsInfo, setContactsInfo] = useState(data.contactsData);

    useEffect(() => {
        changePersonalData(personalInfo);
        changeDivisionData(divisionInfo);
        data.setPersonalData(personalInfo);
        data.setDivisionData(divisionInfo);
        data.setContactsData(contactsInfo);
    }, [personalInfo, divisionInfo, contactsInfo]);


    return (
        <>
        <div className='w-full space-y-4 xl:flex xl:space-x-4 xl:space-y-0'>
            <div className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl xl:w-820 xl:px-7.5 xl:space-y-10'>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>
                            Персональная информация
                        </h5>
                        <button
                            className='text-sm text-text-tertiary hover:text-text-secondary transition'
                            onClick={() => setIsPersonalModalActive(true)}
                        >
                            Изменить
                        </button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Имя'} name={'name'} value={personalInfo.name} type={'text'}/>
                            <Output label={'Фамилия'} name={'surname'} value={personalInfo.surname} type={'text'}/>
                        </div>
                        <Output label={'Отчество'} name={'patronymic'} value={personalInfo.patronymic} type={'text'}/>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Дата рождения'} name={'birthday'} value={personalInfo.birthday}
                                    type={'date'}/>
                            <Output label={'Дата трудоустройства'} name={'employmentDate'}
                                    value={personalInfo.employmentDate} type={'date'}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Страна'} name={'country'} value={personalInfo.country} type={'text'}/>
                            <Output label={'Город'} name={'city'} value={personalInfo.city} type={'text'}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Зарплата'} name={'salary'} value={personalInfo.salary} type={'text'}/>
                            <Output label={'Еженедельная зарплата'} name={'weekSalary'} value={personalInfo.weekSalary} type={'text'}/>
                        </div>
                        <Output label={'Номер счета'} name={'accountNumber'} value={personalInfo.accountNumber} type={'text'}/>
                    </div>
                </div>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>
                            Подразделение
                        </h5>
                        <button
                            className='text-sm text-text-tertiary hover:text-text-secondary transition'
                            onClick={() => setIsDivisionModalActive(true)}
                        >
                            Изменить
                        </button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Отдел'} name={'department'} value={divisionInfo.department} type={'text'}/>
                            <Output label={'Руководитель'} name={'director'} value={divisionInfo.director} type={'text'}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Уровень'} name={'level'} value={divisionInfo.level} type={'text'}/>
                            <Output label={'Должность'} name={'position'} value={divisionInfo.position} type={'text'}/>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>
                            Контакты
                        </h5>
                        <button
                            className='text-sm text-text-tertiary hover:text-text-secondary transition'
                            onClick={() => setIsContactsModalActive(true)}
                        >
                            Изменить
                        </button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Номер телефона'} name={'phoneNumber'} value={contactsInfo.phoneNumber}
                                    type={'tel'}/>
                            <Output label={'Электронная почта'} name={'email'} value={contactsInfo.email} type={'email'}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Output label={'Telegram'} name={'telegram'} value={contactsInfo.telegram} type={'text'}/>
                            <Output label={'Slack'} name={'slack'} value={contactsInfo.slack} type={'text'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl h-fit xl:w-658 xl:px-7.5 xl:space-y-10'>
                <div className='flex justify-between items-center'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>Загрузка
                        сотрудника</h5>
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
                                <span
                                    className='font-normal text-text-primary text-base cursor-pointer'
                                    onClick={() => setIsTeamModalActive(true)}
                                >
                                    +2
                                </span>
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
            {isTeamModalActive &&
                <Modal setActive={setIsTeamModalActive}>
                    <TeamInfo/>
                </Modal>
            }
            {isPersonalModalActive &&
                <PersonalModal setActive={setIsPersonalModalActive} data={personalInfo} setData={setPersonalInfo}/>
            }
            {isDivisionModalActive &&
                <DivisionModal setActive={setIsDivisionModalActive} data={divisionInfo} setData={setDivisionInfo}/>
            }
            {isContactsModalActive &&
                <ContactsModal setActive={setIsContactsModalActive} data={contactsInfo} setData={setContactsInfo}/>
            }
        </>
    );
};

export default BasicInformation;