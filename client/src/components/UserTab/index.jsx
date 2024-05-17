import React, {useState} from 'react';
import avatar from "../../img/avatar-24.png";
import {ReactComponent as ArrowDown} from "../../img/chevron-down.svg";
import {ReactComponent as ArrowUp} from "../../img/chevron-up.svg";

const UserTab = () => {
    const [isUserTabOpened, setIsUserTabOpened] = useState(false);

    return (
        <div className='relative'>
            <div
                className='flex px-4 py-1.5 border border-border-primary rounded-full cursor-pointer select-none'
                onClick={() => setIsUserTabOpened(!isUserTabOpened)}
            >
                <img src={avatar} alt="avatar"/>
                {!isUserTabOpened ? <ArrowDown/> : <ArrowUp/>}
            </div>

        </div>
    );
};

export default UserTab;