import React, {useState} from 'react';
import Modal from "../Modal";
import PersonalInfoForm from "../PersonalInfoForm";
import DivisionInfoForm from "../DivisionInfoForm";
import ContactsInfoForm from "../ContactsInfoForm";

const BasicInfoBlock = ({heading, isFirst}) => {
    const [isModalActive, setIsModalActive] = useState(false);


    return (
        <>
        <div className='space-y-6 xl:space-y-10'>
            <div className='flex justify-between items-center'>
                <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>{heading}</h5>
                <button
                    className={`text-sm text-text-tertiary ${!isFirst && 'hidden'}`}
                    onClick={() => setIsModalActive(true)}
                >
                    Изменить
                </button>
            </div>
            {heading === 'Персональная информация' && <PersonalInfoForm isEditing={!isFirst} />}
            {heading === 'Подразделение' && <DivisionInfoForm isEditing={!isFirst}/>}
            {heading === 'Контакты' && <ContactsInfoForm isEditing={!isFirst}/>}
        </div>
            {isModalActive &&
                <Modal setActive={setIsModalActive}>
                    <BasicInfoBlock heading={heading} isFirst={false}/>
                </Modal>
            }
        </>
    );
};

export default BasicInfoBlock;