import React, {useState} from 'react';
import {ReactComponent as ArrowLeft} from "../img/chevron-left.svg";
import avatar from "../img/avatar-160.png";
import Tab from "../components/Tab";
import {observer} from "mobx-react-lite";
import BasicInformation from "../components/BasicInformation";

const PersonalAccount = () => {
    const tabBasicInformation = 'basicInformation';
    const tabVacation = 'vacation';
    const tabEquipment = 'equipment';
    const [toggle, setToggle] = useState(tabBasicInformation);

    return (
        <section className='w-full'>
            <div className='flex px-4 py-2 my-2 space-x-2 items-center'>
                <ArrowLeft/>
                <p className='font-semibold text-sm text-text-tertiary uppercase'>Вернуться к сотрудникам</p>
            </div>
            <div className='relative w-full'>
                <div className='pt-10 px-10 pb-5 bg-bg-secondary rounded-xl'>
                    <div className='flex items-center space-x-12'>
                        <img src={avatar} alt="Avatar"/>
                        <p className="font-bold text-text-primary text-5xl">Иванов<br/>Иван Иванович</p>
                    </div>
                    <div className='mt-2 ml-52 space-y-4 font-normal text-base'>
                        <p className='text-text-primary'>Junior UI/UX designer</p>
                        <div className='flex space-x-2'>
                            <p className='text-text-primary'>Россия, Красноярск</p>
                            <p className='text-text-tertiary'>•</p>
                            <p className='text-text-tertiary'>14:03</p>
                        </div>
                    </div>
                    <div className='flex mt-13'>
                        <div className='border-b border-border-primary'>
                            <Tab text={'Основная информация'} changeToggle={() => setToggle(tabBasicInformation)}
                                 isSelected={tabBasicInformation === toggle}/>
                            <Tab text={'Отпуск'} changeToggle={() => setToggle(tabVacation)}
                                 isSelected={tabVacation === toggle}/>
                            <Tab text={'Оборудование'} changeToggle={() => setToggle(tabEquipment)}
                                 isSelected={tabEquipment === toggle}/>
                        </div>
                    </div>
                </div>
                <div className={`mt-4 w-full ${toggle === tabBasicInformation ? 'block' : 'hidden'}`}>
                    <BasicInformation/>
                </div>
                <div className={`mt-4 w-full ${toggle === tabVacation ? 'block' : 'hidden'}`}>
                    {toggle}
                </div>
                <div className={`mt-4 w-full ${toggle === tabEquipment ? 'block' : 'hidden'}`}>
                    {toggle}
                </div>
            </div>
        </section>
    );
};

export default observer(PersonalAccount);