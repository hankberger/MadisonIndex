'use client'
import { useState } from "react";
import Link from 'next/link';

export default function NavMenu(){
    const [selectedItem, setSelectedItem] = useState('Home');
    
    const features = {
        home: 'home',
        events: 'events',
        market: 'market',
        explore: 'explore'
    }

    let handleSelect = (feature:string): void => {
        setSelectedItem(feature);
        // switch(feature){
        //     case features.home:
        //         router.push('/');
        //         break;
        //     case features.events:
        //         router.push('/events');
        //         break;
        //     case features.market:
        //         router.push('/market');
        //         break;
        //     case features.explore:
        //         router.push('/explore');
        //         break;
        //     default:
        //         router.push(`/${feature.toLowerCase()}`);
        // }
    }

    let buttonSize = 28;

    return(
         <nav className='animate-bottomFade flex flex-row max-w-5xl justify-around items-center fixed bottom-0 h-16 w-full bg-white rounded-t-md'>
          <div className='w-5/12 h-full rounded-3xl flex flex-row justify-around items-center bg-white'>
            <Link href="/" onClick={()=>handleSelect(features.home)}>
                <svg  className={selectedItem == features.home ? "fill-indigo-500" : "fill-black"} xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                 </svg>
            </Link>
            <Link href={`/${features.events}`} onClick={()=>handleSelect(features.events)}>
                <svg onClick={()=>handleSelect(features.events)} className={selectedItem == features.events ? "fill-indigo-500" : "fill-black"} xmlns="http://www.w3.org/2000/svg" width={buttonSize-4} height={buttonSize-4} viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </Link>
          </div>
        <div className=" flex justify-center items-center h-12 w-12 bg-indigo-400 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        </div>
         
          <div className='w-5/12 h-full rounded-3xl flex flex-row justify-around items-center bg-white'>
            <svg onClick={()=>handleSelect(features.market)} className={selectedItem == features.market ? "fill-indigo-500" : "fill-black"} xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
            </svg>
            <svg onClick={()=>handleSelect(features.explore)} className={selectedItem == features.explore ? "fill-indigo-500" : "fill-black"} xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 16 16">
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
              <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
            </svg>
          </div>
        </nav>
    )
}