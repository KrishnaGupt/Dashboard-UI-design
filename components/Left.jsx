"use client"

import { AiOutlineFolderOpen, AiOutlineCalendar } from 'react-icons/ai';
import {TiMail} from 'react-icons/ti'
import {BiBarChartAlt2} from 'react-icons/bi';
import {FaWpforms} from 'react-icons/fa';

export default function Left() {
    return (
        <div className='text-white'>
            <div className="rounded-[30px] bg-[#464646] px-7 py-7 my-6 w-fit">
                <div>
                    <h1 className='text-[#f14949] font-bold text-xl'>Hire R.</h1>
                    <p className="text-sm text-[#c7c4c4]">UX/UI Designer</p>
                </div>
                <div className="flex mt-7 w-full justify-around">
                    <div className="mr-7">
                        <p className="font-semibold">125</p>
                        <p className='text-[#c7c4c4]'>Projects</p>
                    </div>
                    <div>
                        <p className="font-semibold">$124</p>
                        <p className='text-[#c7c4c4]'>Revenue</p>
                    </div>
                </div>
            </div>
            <div className="rounded-[30px] bg-[#464646] text-[#c7c4c4] p-7 w-fit my-6">
                <div className='flex justify-center items-center'>
                    <div><AiOutlineFolderOpen className='my-2 ml-3 mr-4 bg-black rounded-lg p-2 text-4xl' /></div>
                    <div className='font-semibold'>Dashboard</div>
                </div>
                <div className='flex items-center'>
                    <div><TiMail className='my-2 ml-3 mr-4 p-2 text-4xl' /></div>
                    <div>Email</div>
                </div>
                <div className='flex items-center'>
                    <div><AiOutlineCalendar className='my-2 ml-3 mr-4 p-2 text-4xl' /></div>
                    <div>Calendar</div>
                </div>
                <div className='flex items-center'>
                    <div><BiBarChartAlt2 className='my-2 ml-3 mr-4 p-2 text-4xl'/></div>
                    <div>Graph</div>
                </div>
                <div className='flex items-center'>
                    <div><FaWpforms className='my-2 ml-3 mr-4 p-2 text-4xl' /></div>
                    <div>Forms</div>
                </div>
            </div>
            <div className='bg-[#2f1fda] w-fit rounded-[30px] pl-[35px] pr-5 my-6 py-6 mb-[70px]'>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-medium'>Go Pro</h1>
                    <p className='w-[145px] mt-2 text-sm text-[#c7c4c4]'>Upgrade your plan to get pro benefits</p>
                </div>
                    <div className='bg-black w-fit px-4 py-[6px] rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-[20px] ml-[30px] mt-3'>Let&apos;s start</div>
            </div>
        </div>
    )
}