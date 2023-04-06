"use client"

import Image from 'next/image'
import { FaFeatherAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { MdArrowRightAlt } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export default function Right() {
    return (
        <div className='text-white'>
            <div className='bg-[#464646] flex px-4 py-6 my-6 h-fit rounded-[30px] w-fit items-center'>
                <div className='w-fit ml-6'><FaFeatherAlt className='text-5xl text-[#f14949]' /></div>
                <div className='flex flex-col w-[325px] pl-11'>
                    <div className='w-[95%] flex justify-between mb-3 items-end'>
                        <h1 className='text-2xl font-semibold'>Dear Client</h1>
                        <IoIosArrowDown />
                    </div>
                    <p className='text-xs w-[70%] text-[#c7c4c4]'>Join our online community. It helps in managing your projects</p>
                </div>
            </div>
            <div className='bg-[#464646] px-6 py-7 rounded-[30px]'>
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <h1 className='font-semibold text-2xl'>Transaction Detail</h1>
                        <p className='text-base font-medium text-[#c7c4c4] my-4'>Hi Hira</p>
                    </div>
                    <div>
                        <Image src={'/user3.jpg'} className='rounded-full' height={35} width={35} alt='user'/>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-semibold mb-1 text-xl'>$4,763.40</p>
                        <p className='text-xs text-[#c7c4c4]'>Available Balance</p>
                    </div>
                    <div>
                        <p>****3863</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center my-4'>
                        <MdArrowRightAlt className='bg-black rounded-full text-4xl p-2 mx-2' />
                        <Image height={30} width={30} className='rounded-full m-2' src={'/user1.jpg'} alt='user'/>
                        <Image height={30} width={30} className='rounded-full m-2' src={'/user2.jpg'} alt='user'/>
                        <Image height={30} width={30} className='rounded-full m-2' src={'/user3.jpg'} alt='user'/>
                        <Image height={30} width={30} className='rounded-full m-2' src={'/user4.jpg'} alt='user'/>
                    </div>
                </div>
                <div className='w-full text-end'>
                    <button className='bg-[#f14949] rounded-xl px-4 py-[0.2rem] text-sm font-semibold'>Send</button>
                </div>
            </div>
            <div className='flex'>
                <div className='bg-[#464646] px-6 py-7 rounded-[30px] w-[200px] mx-2 my-6'>
                    <div className='flex w-full justify-between'>
                        <h1 className='text-sm font-semibold'>Projects Details</h1>
                        <BiDotsVerticalRounded className='text-2xl' />
                    </div>
                    <div>
                        <h1 className='text-[#f14949] font-bold text-xl'>Hire R.</h1>
                        <p className="text-sm text-[#c7c4c4] my-3">UX/UI Designer</p>
                    </div>
                    <div>
                        <h1 className='text-xs my-5'>Project Progress</h1>
                        <div className='w-full'>
                            <div className='text-sm w-full text-right pr-[10px] my-3'>75%</div>
                            <div className='h-2 w-36 bg-white rounded-md'><div className='h-2 w-28 rounded-sm
                             bg-[#2f1fda]'></div></div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#464646] px-6 py-7 rounded-[30px] w-[200px] mx-2 my-6'>
                    <div className='flex w-full justify-between items-center'>
                        <h1 className='text-sm font-semibold'>Projects Progress</h1>
                        <BiDotsVerticalRounded className='text-2xl' />
                    </div>
                    <div className='m-5'>
                            <div className="inline-block h-24 w-24 rounded-full border-[5px] border-solid border-[#2f1fda] border-r-transparent align-[-0.125em] rotate-[235deg]" role="status">
                                <div className='bg-[#f14949] text-lg rotate-[125deg] m-auto mt-3 w-fit rounded-full py-4 px-3 font-semibold'>74%</div>
                            </div>
                    </div>
                    <div>
                        <p className='text-sm text-[#c7c4c4]'>3 Remaining Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}