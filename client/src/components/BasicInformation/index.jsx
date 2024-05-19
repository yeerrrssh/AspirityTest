import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import Input from "../Input";
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
import Modal from "../Modal";


const BasicInformation = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [name, setName] = useState('Юрий');

    return (
        <>
        <div className='w-full space-y-4 xl:flex xl:space-x-4 xl:space-y-0'>
            <div className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl xl:w-820 xl:px-7.5 xl:space-y-10'>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>Персональная информация</h5>
                        <button
                            className='text-sm text-text-tertiary'
                            onClick={() => setIsModalActive(true)}
                        >
                            Изменить
                        </button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Имя'} id={'name'} value={name} type={'text'} isDisabled={true}/>
                            <Input label={'Фамилия'} id={'surname'} value={'Герыш'} type={'text'} isDisabled={true}/>
                        </div>
                        <Input label={'Отчество'} id={'patronymic'} value={'Андреевич'} type={'text'}
                               isDisabled={true}/>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Дата рождения'} id={'birthday'} value={'2014-01-06'} type={'date'}
                                   isDisabled={true}/>
                            <Input label={'Дата трудоустройства'} id={'employmentDate'} value={'2020-05-15'}
                                   type={'date'} isDisabled={true}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Страна'} id={'country'} value={'Россия'} type={'text'} isDisabled={true}/>
                            <Input label={'Город'} id={'city'} value={'Красноярск'} type={'text'} isDisabled={true}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Зарплата'} id={'salary'} value={'100 000 ₽'} type={'text'}
                                   isDisabled={true}/>
                            <Input label={'Еженедельная зарплата'} id={'weekSalary'} value={'23 000 ₽'} type={'text'}
                                   isDisabled={true}/>
                        </div>
                        <Input label={'Номер счета'} id={'accountNumber'} value={'12345678912345678912'} type={'number'}
                               isDisabled={true}/>
                    </div>
                </div>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-base text-text-primary xl:font-normal xl:text-2xl'>Подразделение</h5>
                        <button className='text-sm text-text-tertiary'>Изменить</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Отдел'} id={'department'} value={'Дизайн'} type={'text'} isDisabled={true}/>
                            <Input label={'Руководитель'} id={'director'} value={'Анна Кузецова'} type={'text'} isDisabled={true}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Уровень'} id={'level'} value={'Junior'} type={'text'}
                                   isDisabled={true}/>
                            <Input label={'Должность'} id={'position'} value={'UI/UX designer'} type={'text'}
                                   isDisabled={true}/>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 xl:space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-medium text-base text-text-primary xl:font-normal xl:text-2xl'>Контакты</h5>
                        <button className='text-sm text-text-tertiary'>Изменить</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Номер телефона'} id={'phoneNumber'} value={'+7 (999) 999-99-99'} type={'tel'}
                                   isDisabled={true}/>
                            <Input label={'Электронная почта'} id={'email'} value={'test@gmail.com'} type={'email'}
                                   isDisabled={true}/>
                        </div>
                        <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                            <Input label={'Telegram'} id={'telegram'} value={'@tg'} type={'text'} isDisabled={true}/>
                            <Input label={'Slack'} id={'slack'} value={'@slack'} type={'text'} isDisabled={true}/>
                        </div>
                    </div>
                </div>
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
                                <p className='font-normal text-text-primary text-base'>+2</p>
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
            {isModalActive && <Modal header={'Персональная информация'} setActive={setIsModalActive}>dsdjalskjd</Modal>}
        </>
    );
};

export default BasicInformation;