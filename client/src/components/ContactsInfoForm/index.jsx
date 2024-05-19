import React, {useContext} from 'react';
import {Context} from "../../index";
import Input from "../Input";

const ContactsInfoForm = ({isEditing}) => {
    const {user} = useContext(Context);

    return (
        <form className='space-y-10'>
            <div className='space-y-6'>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <Input label={'Номер телефона'} name={'phoneNumber'} value={'+7 (999) 999-99-99'} type={'tel'}
                           isDisabled={!isEditing}/>
                    <Input label={'Электронная почта'} name={'email'} value={'test@gmail.com'} type={'email'}
                           isDisabled={!isEditing}/>
                </div>
                <div className='space-y-6 xl:flex xl:space-x-6 xl:space-y-0'>
                    <Input label={'Telegram'} name={'telegram'} value={'@tg'} type={'text'} isDisabled={!isEditing}/>
                    <Input label={'Slack'} name={'slack'} value={'@slack'} type={'text'} isDisabled={!isEditing}/>
                </div>
            </div>
            {isEditing &&
                <input
                    className='w-full bg-bg-accent px-4 py-2.5 rounded font-semibold text-sm text-text-primary uppercase'
                    type={"submit"}
                    value={'Сохранить'}
                />
            }
        </form>
    );
};

export default ContactsInfoForm;