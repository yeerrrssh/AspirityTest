import React, {useState} from 'react';
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";

import closeBtn from "../../img/exit.svg";

const modalPortal = document.getElementById('modal');

const DivisionModal = ({setActive, data, setData}) => {
    const [selectedDepartment, setSelectedDepartment] = useState(data.department);
    const [selectedLevel, setSelectedLevel] = useState(data.level);
    const [selectedPosition, setSelectedPosition] = useState(data.position);

    const departmentData = [
        {name: 'Разработка'},
        {name: 'Стратегия'},
        {name: 'Маркетинг'},
        {name: 'Продажи'},
        {name: 'Тестирование'},
        {name: 'Ресурсы'},
    ];
    const levelData = [
        {name: 'Junior'},
        {name: 'Middle'},
        {name: 'Senior'},
        {name: 'TeamLead'},
    ];
    const positionData = [
        {name: 'UI/UX designer'},
        {name: 'Frontend developer'},
        {name: 'Backend developer'},
        {name: 'Fullstack developer'},
        {name: 'Mobile-app developer'},
        {name: 'Java developer'},
        {name: 'C/C++ developer'},
        {name: 'Game developer'},
        {name: 'QA Tester'},
    ];

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
                                    Отдел
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('department', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.department,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.department &&
                                        <p className='text-text-error'>{errors?.department.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Руководитель
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('director', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.director,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.director &&
                                        <p className='text-text-error'>{errors?.director.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Уровень
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('level', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.level,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.level &&
                                        <p className='text-text-error'>{errors?.level.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                            <div className='relative'>
                                <label
                                    className='absolute start-2 top-[-8px] px-1 text-xs text-text-secondary bg-bg-secondary mb-r8'
                                >
                                    Должность
                                </label>
                                <input
                                    className='outline-0 w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border border-border-primary rounded'
                                    {...register('position', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.position,
                                    })}
                                />
                                <div className='relative ml-3.5'>
                                    {errors?.position &&
                                        <p className='text-text-error'>{errors?.position.message || "Error!"}</p>
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

export default DivisionModal;