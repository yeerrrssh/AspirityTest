import React, {useContext} from 'react';
import {Context} from "../../index";
import Input from "../Input";

const DivisionInfoForm = ({isEditing}) => {
    const {user} = useContext(Context);

    return (
        <form className='space-y-10'>
            <div className='space-y-6'>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <Input label={'Отдел'} name={'department'} value={'Дизайн'} type={'text'} isDisabled={!isEditing}/>
                    <Input label={'Руководитель'} name={'director'} value={'Анна Кузецова'} type={'text'}
                           isDisabled={!isEditing}/>
                </div>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <Input label={'Уровень'} name={'level'} value={'Junior'} type={'text'}
                           isDisabled={!isEditing}/>
                    <Input label={'Должность'} name={'position'} value={'UI/UX designer'} type={'text'}
                           isDisabled={!isEditing}/>
                </div>
            </div>
            {isEditing &&
                <input className='w-full bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase'
                       type={"submit"}
                       value={'Сохранить'}
                />
            }
        </form>
    );
};

export default DivisionInfoForm;