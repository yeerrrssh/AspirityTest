import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";

import closeBtn from "../../img/exit.svg";
import axios from "axios";
import Selector from "../Selector";

const modalPortal = document.getElementById('modal');

const PersonalModal = ({setActive, data, setData}) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(data.country);

    useEffect(() => {
        async function fetchData() {
            try {
                const countriesResponse = await Promise.any([
                    axios.get('https://data-api.oxilor.com/rest/countries?key=MvoK4aeRPVS8xZ-C6b9TTGhPts7Oaa'),
                ])

                setCountries(countriesResponse.data);

            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        data.country=selectedCountry;
        console.log(selectedCountry);
        console.log(data);
        setData(data);
        setActive(false);
        alert("Данные успешно сохранены!");
    };

    return createPortal((
        <div
            className='fixed flex top-0 left-0 w-screen overflow-y-auto h-screen bg-modal-back md:justify-center md:items-center'>
            <div
                className='w-screen h-screen overflow-auto space-y-6 px-4 py-7.5 bg-bg-secondary xl:rounded-xl xl:space-y-10 xl:w-[824px] xl:px-7.5 xl:h-auto'>
                <div className='flex items-center justify-between'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-3xl'>Персональные
                        данные</h5>
                    <img className='cursor-pointer' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
                <form
                    className='space-y-6 xl:space-y-10'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='space-y-4 xl:space-y-6'>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.name ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Имя
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.name ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('name', {
                                        required: "Поле обязательно к заполнению",
                                        minLength: {
                                            value: 2,
                                            message: "Имя не может быть короче 2 символов"
                                        },
                                        value: data.name,
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.name &&
                                        <p className='text-text-error text-xs'>{errors?.name.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.surname ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Фамилия
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.surname ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('surname', {
                                        required: "Поле обязательно к заполнению",
                                        minLength: {
                                            value: 2,
                                            message: "Фамилия не может быть короче 2 символов"
                                        },
                                        value: data.surname,
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.surname &&
                                        <p className='text-text-error text-xs'>{errors?.surname.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <label
                                className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.patronymic ? 'text-text-error' : 'text-text-secondary'}`}
                            >
                                Отчество
                            </label>
                            <input
                                className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.patronymic ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                {...register('patronymic', {
                                    minLength: {
                                        value: 6,
                                        message: "Отчество не может быть короче 6 символов"
                                    },
                                    value: data.patronymic,
                                })}
                            />
                            <div className='relative ml-2.5'>
                                {errors?.patronymic &&
                                    <p className='text-text-error text-xs'>{errors?.patronymic.message || "Error!"}</p>
                                }
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.birthday ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Дата рождения
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.birthday ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('birthday', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.birthday,
                                    })}
                                    type={'date'}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.birthday &&
                                        <p className='text-text-error text-xs'>{errors?.birthday.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.employmentDate ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Дата трудоустройства
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.employmentDate ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('employmentDate', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.employmentDate,
                                    })}
                                    type={'date'}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.employmentDate &&
                                        <p className='text-text-error text-xs'>{errors?.employmentDate.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <Selector label={'Страна'} data={countries} setSelected={setSelectedCountry} defValue={selectedCountry}/>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.city ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Город
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.city ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('city', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.city,
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.city &&
                                        <p className='text-text-error text-xs'>{errors?.city.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.salary ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Зарплата
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.salary ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('salary', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.salary,
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.salary &&
                                        <p className='text-text-error text-xs'>{errors?.salary.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.weekSalary ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Еженедельная зарплата
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.weekSalary ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('weekSalary', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.weekSalary,
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.weekSalary &&
                                        <p className='text-text-error text-xs'>{errors?.weekSalary.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <label
                                className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.accountNumber ? 'text-text-error' : 'text-text-secondary'}`}
                            >
                                Номер счета
                            </label>
                            <input
                                className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.accountNumber ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
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
                                    value: data.accountNumber,
                                })}
                            />
                            <div className='relative ml-2.5'>
                                {errors?.accountNumber &&
                                    <p className='text-text-error text-xs'>{errors?.accountNumber.message || "Error!"}</p>
                                }
                            </div>
                        </div>
                    </div>
                    <input
                        className='cursor-pointer w-full bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase'
                        type={"submit"}
                        value={'Сохранить'}
                    />
                </form>
            </div>
        </div>), modalPortal
    );
};

export default PersonalModal;