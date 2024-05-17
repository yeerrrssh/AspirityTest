import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../img/Logo.svg";
import UserTab from "../UserTab";
import {ReactComponent as MenuBtn} from "../../img/button.svg";
import Button from "../Button";

const Header = () => {
    return (
        <header className='flex items-center py-6 justify-between'>
            <div className='cursor-pointer'>
                <Logo/>
            </div>
            <nav className='flex space-x-2 items-center'>
                <Button>Создать счет</Button>
                <Button>Корзина</Button>
                <UserTab/>
                <div className='cursor-pointer'>
                    <MenuBtn/>
                </div>
                </nav>
        </header>
);
};

export default Header;