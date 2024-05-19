import React, {useState} from 'react';
import UserTab from "../UserTab";
import Button from "../Button";
import logo from "../../img/Logo.svg";
import {ReactComponent as MenuBtn} from "../../img/button.svg";

const Header = () => {
    return (
        <header className='flex items-center px-4 py-6 justify-between xl:px-0'>
            <img className='w-[135px] xl:w-[180px] cursor-pointer' src={logo} alt={'logo'}/>
            <nav className='flex space-x-2 items-center'>
                <div className='hidden xl:flex space-x-2'>
                    <Button>Создать счет</Button>
                    <Button>Корзина</Button>
                </div>
                <UserTab/>
                <div className='cursor-pointer'>
                    <MenuBtn/>
                </div>
                </nav>
        </header>
);
};

export default Header;