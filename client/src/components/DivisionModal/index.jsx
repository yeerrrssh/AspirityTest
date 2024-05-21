import React, {useState} from 'react';
import {createPortal} from "react-dom";
import {useForm} from "react-hook-form";

import closeBtn from "../../img/exit.svg";
import Selector from "../Selector";

const modalPortal = document.getElementById('modal');

const DivisionModal = ({setActive, data, setData}) => {
    const [selectedDepartment, setSelectedDepartment] = useState(data.department);
    const [selectedLevel, setSelectedLevel] = useState(data.level);
    const [selectedPosition, setSelectedPosition] = useState(data.position);

    const departmentData = [
        {name: 'Разработка'},
        {name: 'Дизайн'},
        {name: 'Маркетинг'},
        {name: 'Тестирование'},
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
            isValid,
        },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        data.department=selectedDepartment;
        data.level=selectedLevel;
        data.position=selectedPosition;
        setData(data);
        setActive(false);
    };

    return createPortal((
        <div
            className='fixed flex top-0 left-0 w-screen overflow-y-auto h-screen bg-modal-back md:justify-center md:items-center'>
            <div
                className='w-screen h-screen space-y-6 px-4 py-7.5 bg-bg-secondary xl:rounded-xl xl:space-y-10 xl:w-[824px] xl:px-7.5 xl:h-auto'>
                <div className='flex items-center justify-between'>
                    <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-3xl'>Подразделение</h5>
                    <img className='cursor-pointer' onClick={() => setActive(false)} src={closeBtn} alt='Close'/>
                </div>
                <form
                    className='space-y-6 xl:space-y-10'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='space-y-4 xl:space-y-6'>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <Selector label={'Отдел'} data={departmentData} setSelected={setSelectedDepartment} defValue={selectedDepartment} isAsync={false}/>
                            </div>
                            <div className='relative'>
                                <label
                                    className={`absolute start-2 top-[-8px] px-1 text-xs bg-bg-secondary mb-r8 ${errors?.director ? 'text-text-error' : 'text-text-secondary'}`}
                                >
                                    Руководитель
                                </label>
                                <input
                                    className={`outline-0 hover:border-icons-primary transition-all w-full xl:min-w-[368px] px-3.5 py-2.5 text-sm bg-bg-secondary font-medium text-text-secondary border rounded ${errors?.director ? 'border-border-error' : 'border-border-primary focus:border-icons-success focus:text-text-success'}`}
                                    {...register('director', {
                                        required: "Поле обязательно к заполнению",
                                        value: data.director,
                                        pattern: {
                                            value: /^[а-яА-Яa-zA-Z[ ]*$/,
                                            message: "Используйте только буквенные символы",
                                        },
                                    })}
                                />
                                <div className='relative ml-2.5'>
                                    {errors?.director &&
                                        <p className='text-text-error text-xs'>{errors?.director.message || "Error!"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 xl:flex xl:space-x-6 xl:space-y-0'>
                            <div className='relative'>
                                <Selector label={'Уровень'} data={levelData} setSelected={setSelectedLevel} defValue={selectedLevel} isAsync={false}/>
                            </div>
                            <div className='relative'>
                                <Selector label={'Должность'} data={positionData} setSelected={setSelectedPosition} defValue={selectedPosition} isAsync={false}/>
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

export default DivisionModal;