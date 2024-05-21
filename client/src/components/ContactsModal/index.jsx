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
            isValid,
        },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        setData(data);
        setActive(false);
    };

    //const normalizePhone = (value) => {
        //let phoneNumber = '+7 ' + value.toString();
        //if (phoneNumber === "") { return ''; }
        //return phoneNumber;
    //}

    return createPortal((
        <div
            className='fixed flex top-0 left-0 w-screen overflow-y-auto h-screen bg-modal-back md:justify-center md:items-center'>
            <div
                className='w-screen h-screen overflow-auto space-y-6 px-4 py-7.5 bg-bg-secondary xl:rounded-xl xl:space-y-10 xl:w-[824px] xl:px-7.5 xl:h-auto'>
                <div className='flex items-center justify-between'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-3xl'>Контакты</h5>
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
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.phoneNumber ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Номер телефона
                                </label>
                                <input id='phone'
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.phoneNumber ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('phoneNumber', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.phoneNumber,
                                    })}
                                    //onChange={(event) => {
                                        //event.target.value = normalizePhone(event.target.value);
                                    //}}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.phoneNumber &&
                                        <p className='text-text-error text-xs'>{errors?.phoneNumber.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.email ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Электронная почта
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.email ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('email', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.email,
                                        pattern: {
                                            value: /.+@.+\..+/i,
                                            message: "Неверный формат email",
                                        },
                                    })}
                                    type={"email"}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.email &&
                                        <p className='text-text-error text-xs'>{errors?.email.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.telegram ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Telegram
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.telegram ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('telegram', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.telegram,
                                        pattern: {
                                            value: /^@+[A-Za-z\d_]{5,32}$/,
                                            message: "Некорректный telegram",
                                        },
                                    })}
                                    placeholder='@YourUserName'
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.telegram &&
                                        <p className='text-text-error text-xs'>{errors?.telegram.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.slack ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Slack
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.slack ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('slack', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.slack,
                                        pattern: {
                                            value: /^@+[A-Za-z\d_]{5,32}$/,
                                            message: "Некорректный slack",
                                        },
                                    })}
                                    placeholder='@YourUserName'
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.slack &&
                                        <p className='text-text-error text-xs'>{errors?.slack.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <input
                        className='hover:bg-state-blue-hover active:bg-state-blue-focused transition-all cursor-pointer w-full bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase'
                        type={"submit"}
                        value={'Сохранить'}
                        disabled={!isValid}
                    />
                </form>
            </div>
        </div>), modalPortal
    );
};

export default ContactsModal;