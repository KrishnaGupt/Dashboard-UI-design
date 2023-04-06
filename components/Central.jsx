"use client"

import Image from 'next/image'
import { TbCurrencyDollar } from 'react-icons/tb'

export default function Central() {
    return (
        <div className='mx-6'>
            <div className='rounded-[30px] flex justify-center items-center px-7 py-4 w-fit my-6 mx-3 bg-[#464646] text-[#c7c4c4]'>
                <div><TbCurrencyDollar className='bg-black text-white text-5xl mx-5 p-2 rounded-full' /></div>
                <div className='ml-12 mr-4'>
                    <p className='text-sm font-semibold'>Total Revenue</p>
                    <p className='text-lg font-bold mb-4'>$92,983</p>
                    <div className='h-2 w-28 bg-white'><div className='h-2 w-20 bg-[#2f1fda]'></div></div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col bg-[#464646] text-[#c7c4c4] px-4 py-4 w-fit rounded-[30px] mx-2'>
                    <div>
                        <h1 className='text-lg font-semibold'>Travel</h1>
                        <p className='text-sm font-medium'>Mobile Application</p>
                    </div>
                    <div>
                        <small className='text-xs'>Seen by</small>
                        <div className='flex my-2'>
                            <Image height={25} width={25} className='rounded-full' src={'/user1.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user2.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user3.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user4.jpg'} alt='user'/>
                        </div>
                    </div>
                    <div className='font-medium text-xs flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <div className='bg-[#2f1fda] px-4 py-[0.9px] rounded-lg'>Tour</div>
                            <div className='px-4 py-[0.9px] bg-black rounded-lg mx-2'>Trip</div>
                        </div>
                        <div className='bg-black w-fit my-2 px-2 py-[0.9px] rounded-lg'>Transport</div>
                    </div>
                </div>
                <div className='flex flex-col bg-[#464646] text-[#c7c4c4] px-4 py-4 w-fit rounded-[30px] mx-2'>
                    <div>
                        <h1 className='text-lg font-semibold'>Hotel</h1>
                        <p className='text-sm font-medium'>Dashboard</p>
                    </div>
                    <div>
                        <small className='text-xs'>Seen by</small>
                        <div className='flex my-2'>
                            <Image height={25} width={25} className='rounded-full' src={'/user1.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user2.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user3.jpg'} alt='user'/>
                            <Image height={25} width={25} className='rounded-full -ml-2' src={'/user4.jpg'} alt='user'/>
                        </div>
                    </div>
                    <div className='font-medium text-xs flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <div className='bg-[#2f1fda] px-4 py-[0.9px] rounded-lg'>Tour</div>
                            <div className='px-4 py-[0.9px] bg-black rounded-lg mx-2'>Trip</div>
                        </div>
                        <div className='bg-black w-fit my-2 px-2 py-[0.9px] rounded-lg'>Transport</div>
                    </div>
                </div>
            </div>
            <div className='text-white bg-[#464646] h-[370px] my-6 mx-2 rounded-[30px] px-4 pb-5 pt-8 w-fit'>
                <div className='w-full flex justify-around my-4'>
                    <h1 className='text-lg font-medium'>Free Slots Available</h1>
                        <div className='bg-black w-8 h-1'>
                    <div className='h-4 w-4 rounded-full bg-[#2f1fda] ml-5 -mt-[5px]'></div>
                    </div>
                </div>
                <div className='flex flex-wrap w-[308px] my-8 justify-center'>
                    <div className='bg-[#f14949] rounded-2xl px-6 py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>12</p>
                        <p className='font-medium'>June</p>
                    </div>
                    <div className='bg-black rounded-2xl px-6 py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>18</p>
                        <p className='font-medium'>June</p>
                    </div>
                    <div className='bg-black rounded-2xl px-6 py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>20</p>
                        <p className='font-medium'>June</p>
                    </div>
                    <div className='bg-black rounded-2xl px-[1.7rem] py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>02</p>
                        <p className='font-medium'>July</p>
                    </div>
                    <div className='bg-black rounded-2xl px-[1.7rem] py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>10</p>
                        <p className='font-medium'>July</p>
                    </div>
                    <div className='bg-black rounded-2xl px-[1.7rem] py-3 my-4 mx-2 w-fit'>
                        <p className='text-2xl font-semibold'>15</p>
                        <p className='font-medium'>July</p>
                    </div>
                </div>
            </div>
        </div>
    )
}