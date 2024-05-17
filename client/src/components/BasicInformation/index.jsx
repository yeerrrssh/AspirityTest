import React from 'react';
import Input from "../Input";
import Button from "../Button";
import directorsAvatar from "../../img/avatar-director.png";
import avatarsTest from "../../img/avatar-group.png";
import {ReactComponent as BlueArrow} from "../../img/arrow-right.svg";

const BasicInformation = () => {
    return (
        <div className='flex w-full space-x-4'>
            <div className='w-820 px-7.5 py-7.5 space-y-10 bg-bg-secondary rounded-xl'>
                <div className='space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-normal text-2xl text-text-primary'>Персональная информация</h5>
                        <button className='text-sm text-text-tertiary'>Изменить</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex space-x-6'>
                            <Input label={'Имя'} id={'name'} value={'Юрий'} type={'text'} isDisabled={true}/>
                            <Input label={'Фамилия'} id={'surname'} value={'Герыш'} type={'text'} isDisabled={true}/>
                        </div>
                        <Input label={'Отчество'} id={'patronymic'} value={'Андреевич'} type={'text'}
                               isDisabled={true}/>
                        <div className='flex space-x-6'>
                            <Input label={'Дата рождения'} id={'birthday'} value={'2014-01-06'} type={'date'}
                                   isDisabled={true}/>
                            <Input label={'Дата трудоустройства'} id={'employmentDate'} value={'2020-05-15'}
                                   type={'date'} isDisabled={true}/>
                        </div>
                        <div className='flex space-x-6'>
                            <Input label={'Страна'} id={'country'} value={'Россия'} type={'text'} isDisabled={true}/>
                            <Input label={'Город'} id={'city'} value={'Красноярск'} type={'text'} isDisabled={true}/>
                        </div>
                        <div className='flex space-x-6'>
                            <Input label={'Зарплата'} id={'salary'} value={'100 000 ₽'} type={'text'}
                                   isDisabled={true}/>
                            <Input label={'Еженедельная зарплата'} id={'weekSalary'} value={'23 000 ₽'} type={'text'}
                                   isDisabled={true}/>
                        </div>
                        <Input label={'Номер счета'} id={'accountNumber'} value={'12345678912345678912'} type={'number'}
                               isDisabled={true}/>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-normal text-2xl text-text-primary'>Подразделение</h5>
                        <button className='text-sm text-text-tertiary'>Изменить</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex space-x-6'>
                            <Input label={'Отдел'} id={'department'} value={'Дизайн'} type={'text'} isDisabled={true}/>
                            <Input label={'Руководитель'} id={'director'} value={'Анна Кузецова'} type={'text'} isDisabled={true}/>
                        </div>
                        <div className='flex space-x-6'>
                            <Input label={'Уровень'} id={'level'} value={'Junior'} type={'text'}
                                   isDisabled={true}/>
                            <Input label={'Должность'} id={'position'} value={'UI/UX designer'} type={'text'}
                                   isDisabled={true}/>
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-normal text-2xl text-text-primary'>Контакты</h5>
                        <button className='text-sm text-text-tertiary'>Изменить</button>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex space-x-6'>
                            <Input label={'Номер телефона'} id={'phoneNumber'} value={'+7 (999) 999-99-99'} type={'tel'}
                                   isDisabled={true}/>
                            <Input label={'Электронная почта'} id={'email'} value={'test@gmail.com'} type={'email'}
                                   isDisabled={true}/>
                        </div>
                        <div className='flex space-x-6'>
                            <Input label={'Telegram'} id={'telegram'} value={'@tg'} type={'text'} isDisabled={true}/>
                            <Input label={'Slack'} id={'slack'} value={'@slack'} type={'text'} isDisabled={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-658 h-fit px-7.5 py-7.5 space-y-10 bg-bg-secondary rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h5 className='font-normal text-2xl text-text-primary'>Загрузка сотрудника</h5>
                    <p className='font-semibold text-sm text-accent-orange'>100%</p>
                </div>
                <div className='flex space-x-[124px]'>
                    <div className='space-y-2'>
                        <p className='font-normal text-base text-text-tertiary'>Название проекта</p>
                        <p className='font-normal text-base text-text-primary'>MedPoint 24</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-base text-text-tertiary'>Тип проекта</p>
                        <p className='font-normal text-base text-text-primary'>Коммерческий</p>
                    </div>
                </div>
                <div className='flex space-x-[124px]'>
                    <div className='space-y-2'>
                        <p className='font-normal text-base text-text-tertiary'>Ответственный</p>
                        <div className='flex space-x-2 items-center'>
                            <img src={directorsAvatar} alt="director's avatar"/>
                            <p className='font-normal text-base text-text-primary'>Анна Кузнецова</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-normal text-base text-text-tertiary'>Команда</p>
                        <img src={avatarsTest} alt="test"/>
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
                <div className='flex w-full'>
                    <Button full={true}>Посмотреть всю загрузку</Button>
                </div>
            </div>
        </div>
    );
};

export default BasicInformation;