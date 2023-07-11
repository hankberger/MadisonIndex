import { profile } from "console";
import Image from 'next/image';

interface ChatterProps{
    username: string;
    profilePic: string;
    content: string;
    upvotes: number;
    comments: number;
}

export default function ChatterCard({username, profilePic, content, upvotes, comments}:ChatterProps){
    return(
        <div id="chatterCard" className="animate-fade3SecDelay mt-2 p-2 w-full h-fill shadow-md bg-indigo-100 border border-indigo-200 rounded-2xl flex flex-row justify-between">
          <div className="flex flex-col">
            <div  className=" flex flex-row items-center gap-2 text-slate-900 font-semibold text-xl">
              <div className=" overflow-hidden h-12 w-12 rounded-full border-2 border-indigo-300">
                <Image
                  src={profilePic}
                  height={150}
                  width={150}
                  alt="user profile picture"
                />
              </div>
              <h4>{username}</h4>
            </div>
            <div className="p-1 text-slate-600 overflow-auto break-words">
                {content}
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-end justify-between m-1">
            <div id="voting" className="flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
              <div className="text-black font-light">{upvotes}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            
              <div id="comments" className="flex flex-col items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className="text-black text-lg mt-[-10px]">{comments}</div>
              </div>
          </div>
        </div>
    )
}