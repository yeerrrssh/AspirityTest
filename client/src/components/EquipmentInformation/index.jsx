import React, {useState} from 'react';
import Modal from "../Modal";
import PersonalModal from "../PersonalModal";
import Output from "../Output";
import directorsAvatar from "../../img/avatar-director.png";
import teamAvatar1 from "../../img/team-avatar-1.png";
import teamAvatar2 from "../../img/team-avatar-2.png";
import teamAvatar3 from "../../img/team-avatar-3.png";
import teamAvatar4 from "../../img/team-avatar-4.png";
import teamAvatar5 from "../../img/team-avatar-5.png";
import teamAvatar6 from "../../img/team-avatar-6.png";
import teamAvatar7 from "../../img/team-avatar-7.png";
import Button from "../Button";
import TeamInfo from "../TeamInfo";
import DivisionModal from "../DivisionModal";
import ContactsModal from "../ContactsModal";

const EquipmentInformation = () => {
    const [text, setText] = useState('Иван');
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <>
            <div className='w-full space-y-4 xl:flex xl:space-x-4 xl:space-y-0'>
                <div className='w-full px-4 py-7.5 space-y-8 bg-bg-secondary rounded-xl xl:px-7.5 xl:space-y-10'>
                    <h2 className='font-normal text-text-primary text-2xl'>Soon...</h2>
                </div>
            </div>
        </>
    );
};

export default EquipmentInformation;