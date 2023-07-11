import Image from 'next/image'
import Link from 'next/link';

export default function Events() {
   
  return (
    <>
        <div className='w-full flex flex-col rounded-xl shadow-lg border-2 border-indigo-200'>
            <h2 className='mt-3 ml-3 text-indigo-500 text-4xl font-normal'>Got an Event?</h2>
            <p className=' ml-3 text-slate-500'>We'd love to spread the word.</p>
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
        
    </>
  )
}
