import Image from 'next/image'
import Link from 'next/link';
import EventCard from '@/components/EventCard';

export default function Events() {
   
  return (
    <>
        <div className='w-full flex flex-col rounded-xl shadow-lg border-2 border-indigo-200'>
            <h2 className='mt-3 ml-3 text-indigo-500 text-4xl font-normal'>Got an Event?</h2>
            <p className=' ml-3 text-slate-500'>We&apos;d love to spread the word.</p>
            <div className='flex h-full flex-row m-3 flex-grow items-center gap-3'>
                <button className='basis-1/2 h-10 rounded-lg shadow-md bg-indigo-600 '>
                    Post an Event
                </button> 
                <button className='basis-1/3 w-1/3 h-10 rounded-lg bg-white border-2 border-indigo-600 text-indigo-500 shadow-md'>
                    My Events
                </button>       
            </div>
              
        </div> 
        <h1 className='mt-3 text-slate-700 text-2xl'>Events</h1>
        <div className='flex flex-row items-center justify-around bg-slate-100 rounded-lg'>
            <div>
                <div className='flex flex-col items-center text-slate-400'>
                    <p className='font-semibold'>
                        JUNE 23
                    </p>
                    <p className='mt-[-5px]'>
                        Thursday
                    </p>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-indigo-400 mr-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                <div className='flex flex-col items-center text-indigo-600'>
                    <p className='font-semibold'>
                        JUNE 24
                    </p>
                    <p className='text-slate-600 mt-[-5px]'>
                        Friday
                    </p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-indigo-400 ml-1" width="16" height="16" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center text-slate-400'>
                    <p className='font-semibold'>
                        JUNE 25
                    </p>
                    <p className=' mt-[-5px]'>
                        Saturday
                    </p>
                </div>
            </div>
        </div>
        
        <div id='eventContainer' className='flex flex-col rounded-lg'>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </>
  )
}
