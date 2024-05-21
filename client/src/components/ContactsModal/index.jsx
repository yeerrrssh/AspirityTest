import React from 'react';
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";

import closeBtn from "../../img/exit.svg";

const modalPortal = document.getElementById('modal');

const ContactsModal = ({setActive, data, setData}) => {
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
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Номер телефона
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('phoneNumber', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.phoneNumber,
                                    })}
                                    type={"tel"}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.phoneNumber &&
                                        <p className='text-text-error'>{errors?.phoneNumber.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Электронная почта
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('email', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.email,
                                    })}
                                    type={"email"}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.email &&
                                        <p className='text-text-error'>{errors?.email.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Telegram
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('telegram', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.telegram,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.telegram &&
                                        <p className='text-text-error'>{errors?.telegram.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Slack
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('position', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.slack,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.slack &&
                                        <p className='text-text-error'>{errors?.slack.message || "Error!"}</p>
                                    }
                                </div>
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

export default ContactsModal;