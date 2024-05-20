import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const PersonalInfoForm = ({isEditing}) => {
    const {user} = useContext(Context);


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        alert("Данные успешно сохранены!");
        user.setName(data.name);
        user.setSurname(data.surname);
        user.setPatronymic(data.patronymic);
        user.setBirthday(data.birthday);
        user.setEmploymentDate(data.employmentDate);
        user.setCountry(data.country);
        user.setCity(data.city);
        user.setSalary(data.salary);
        user.setWeekSalary(data.weekSalary);
        user.setAccountNumber(data.accountNumber);
    };

    return (
        <form
            className='space-y-6 xl:space-y-10'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='space-y-6'>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Имя
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('name', {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 2,
                                    message: "Имя не может быть короче 2 символов"
                                },
                                value: user.name,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.name &&
                                <p className='text-text-error'>{errors?.name.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Фамилия
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('surname', {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 2,
                                    message: "Фамилия не может быть короче 2 символов"
                                },
                                value: user.surname,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.surname &&
                                <p className='text-text-error'>{errors?.surname.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <label
                        className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                    >
                        Отчество
                    </label>
                    <input
                        className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                        {...register('patronymic', {
                            minLength: {
                                value: 6,
                                message: "Отчество не может быть короче 6 символов"
                            },
                            value: user.patronymic,
                        })}
                        disabled={!isEditing}
                    />
                    <div className='relative ml-3.5'>
                        {errors?.patronymic &&
                            <p className='text-text-error'>{errors?.patronymic.message || "Error!"}</p>
                        }
                    </div>
                </div>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Дата рождения
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('birthday', {
                                required: "Поле обязательно к заполнению",
                                value: user.birthday,
                            })}
                            type={'date'}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.birthday &&
                                <p className='text-text-error'>{errors?.birthday.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Дата трудоустройства
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('employmentDate', {
                                required: "Поле обязательно к заполнению",
                                value: user.employmentDate,
                            })}
                            type={'date'}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.employmentDate &&
                                <p className='text-text-error'>{errors?.employmentDate.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Страна
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('country', {
                                required: "Поле обязательно к заполнению",
                                value: user.country,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.country &&
                                <p className='text-text-error'>{errors?.country.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Город
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('city', {
                                required: "Поле обязательно к заполнению",
                                value: user.city,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.city &&
                                <p className='text-text-error'>{errors?.city.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Зарплата
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('salary', {
                                required: "Поле обязательно к заполнению",
                                value: user.salary,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.salary &&
                                <p className='text-text-error'>{errors?.salary.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <label
                            className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                        >
                            Еженедельная зарплата
                        </label>
                        <input
                            className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                            {...register('weekSalary', {
                                required: "Поле обязательно к заполнению",
                                value: user.weekSalary,
                            })}
                            disabled={!isEditing}
                        />
                        <div className='relative ml-3.5'>
                            {errors?.weekSalary &&
                                <p className='text-text-error'>{errors?.weekSalary.message || "Error!"}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <label
                        className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                    >
                        Номер счета
                    </label>
                    <input
                        className='w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                        {...register('accountNumber', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 20,
                                message: "Номер счета должен состоять из 20 символов"
                            },
                            maxLength: {
                                value: 20,
                                message: "Номер счета должен состоять из 20 символов"
                            },
                            value: user.accountNumber,
                        })}
                        disabled={!isEditing}
                    />
                    <div className='relative ml-3.5'>
                        {errors?.accountNumber &&
                            <p className='text-text-error'>{errors?.accountNumber.message || "Error!"}</p>
                        }
                    </div>
                </div>
            </div>
            {isEditing &&
                <input
                    className='cursor-pointer w-full bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase'
                    type={"submit"}
                    value={'Сохранить'}
                />
            }
        </form>
    );
};

export default PersonalInfoForm;