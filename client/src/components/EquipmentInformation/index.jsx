import React, {useState} from 'react';
import Modal from "../Modal";
import PersonalModal from "../PersonalModal";

const EquipmentInformation = () => {
    const [text, setText] = useState('Иван');
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalActive(true)}>Изменить</button>
            <input value={text} disabled={true}/>
            {isModalActive &&
                <PersonalModal setActive={setIsModalActive} setText={setText} text={text}/>
            }
        </>
    );
};

export default EquipmentInformation;