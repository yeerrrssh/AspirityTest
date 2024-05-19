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
                <div className='py-6 px-4 xl:pt-10 xl:px-10 xl:pb-5 bg-bg-secondary rounded-xl'>
                    <div className='flex flex-col justify-center text-center items-center space-y-4 xl:flex-row xl:justify-normal xl:text-left xl:space-x-12 xl:space-y-0'>
                        <img src={avatar} alt="Avatar"/>
                        <p className="font-bold text-text-primary text-2xl whitespace-pre-line xl:text-5xl">{`Иванов\n Иван Иванович`}</p>
                    </div>
                    <div className='mt-6 space-y-4 font-normal text-base justify-center text-center xl:mt-2 xl:ml-52 xl:justify-normal xl:text-left'>
                        <p className='text-text-primary'>Junior UI/UX designer</p>
                        <div className='flex justify-center space-x-2 xl:justify-normal'>
                            <p className='text-text-primary'>Россия, Красноярск</p>
                            <p className='text-text-tertiary'>•</p>
                            <p className='text-text-tertiary'>14:03</p>
                        </div>
                    </div>
                    <div className='overflow-x-auto xl:flex mt-6 xl:mt-13'>
                        <div className='w-[445px] xl:w-auto border-b border-border-primary'>
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