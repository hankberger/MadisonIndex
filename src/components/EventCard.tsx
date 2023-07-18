export default function EventCard(){
    return(
        <div className="rounded-lg bg-white shadow-md mt-2 flex flex-row justify-between">
            
            <div className="flex felx-row">
                <img src="./what.png" className="h-16 w-16 rounded-lg">
                </img>
                <div className="ml-2">
                    <h2 className="text-slate-800 font-semibold text-lg">
                        Naked Bike Ride
                    </h2>
                    <h3 className="text-indigo-300 mt-[-7px]">
                        Olbrich Gardens
                    </h3>
                </div>
            </div>
           <div className="h-16 w-16 flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-indigo-400" width="24" height="24" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
           </div>
        </div>
    );
}