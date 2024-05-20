import React from 'react';

import teamAvatar1 from "../../img/team-avatar-1.png";
import teamAvatar2 from "../../img/team-avatar-2.png";
import teamAvatar3 from "../../img/team-avatar-3.png";
import teamAvatar4 from "../../img/team-avatar-4.png";
import teamAvatar5 from "../../img/team-avatar-5.png";
import teamAvatar6 from "../../img/team-avatar-6.png";
import teamAvatar7 from "../../img/team-avatar-7.png";
import teamAvatar8 from "../../img/team-avatar-8.png";
import teamAvatar9 from "../../img/team-avatar-9.png";

const Team = () => {
    return (
        <div className='space-y-6 xl:space-y-8'>
            <h5 className='font-medium text-text-primary text-base xl:font-normal xl:text-2xl'>Команда</h5>
            <div className='space-y-4'>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar1} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>John Smith</h6>
                        <p className='font-normal text-text-secondary text-sm'>Junior UI/UX designer</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar2} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Sarah Brown</h6>
                        <p className='font-normal text-text-secondary text-sm'>Middle Product Design TeamLead</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar3} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>David Taylor</h6>
                        <p className='font-normal text-text-secondary text-sm'>Middle Android Developer</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar4} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Ann Williams</h6>
                        <p className='font-normal text-text-secondary text-sm'>Middle Head of Service</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar5} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>James Miller</h6>
                        <p className='font-normal text-text-secondary text-sm'>CEO</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar6} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Henry Jones</h6>
                        <p className='font-normal text-text-secondary text-sm'>Middle QA</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar7} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Charles Williams</h6>
                        <p className='font-normal text-text-secondary text-sm'>Junior Employee Support Manager</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar8} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Jane Miller</h6>
                        <p className='font-normal text-text-secondary text-sm'>Middle Sales Manager</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <img src={teamAvatar9} alt='avatar'/>
                    <div className='space-y-0'>
                        <h6 className='font-normal text-text-primary text-base'>Sam Clark</h6>
                        <p className='font-normal text-text-secondary text-sm'>QA Lead</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;