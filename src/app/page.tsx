import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="flex max-w-5xl bg-white min-h-screen w-full flex-col p-4 pt-0">
      {/* <ProfileCard/> */}
      <h1 className="animate-fade1SecDelay text-2xl font-normal text-black pt-2">
        For You
      </h1>
      <div className="animate-fade1SecDelay w-full flex-col shadow-md rounded-2xl">
        <div className=" w-full rounded-t-2xl bg-black h-48 overflow-hidden relative ">
          <Image
            src="/madisonSunset.png"
            alt="A picture of the Madison, WI skyline during sunset."
            className="bg-fixed h-full w-full object-cover"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="bg-white h-16 rounded-b-2xl flex flex-row items-center justify-between">
          <div className="ml-2">
            <h2 className="text-black text-3xl font-light">
              Naked Bike Ride<span className="text-2xl">&gt;</span>
            </h2>
            <h3 className="text-indigo-300 text-md mt-[-5px] font-light">
              1818 Random Blvd. Madison, WI
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-black text-xl mr-3 font-bold">JUNE 18</h3>
            <h4 className="text-black mt-[-10px] mr-3 font-normal">8:00PM</h4>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between items-baseline">
        <h1 className="animate-fade3SecDelay text-2xl font-normal text-slate-900">
          Chatter
        </h1>
        <h3 className="animate-fade3SecDelay mt-[-4px] text-xs font-light text-indigo-400">
          <span className="underline">Explore More</span> &gt;
        </h3>
      </div>
      <div className=" flex flex-col gap-3">
        <div id="chatterCard" className="animate-fade3SecDelay mt-2 p-2 w-full h-fill shadow-md bg-indigo-100 border border-indigo-200 rounded-2xl flex flex-row">
          <div className="flex flex-col">
            <div  className=" flex flex-row items-center gap-2 text-slate-900 font-semibold text-xl">
              <div className=" overflow-hidden h-12 w-12 rounded-full border-2 border-indigo-300">
                <Image
                  src="/traty.png"
                  height={150}
                  width={150}
                  alt="user profile picture"
                />
              </div>
              <h4>funnyguy7</h4>
            </div>
            <div className="w-full p-1 text-slate-600">
              My garden gnomes disappeared overnight. If anyone spots them
              hitching a ride to Mars, please send them home!
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-between m-1">
            <div id="voting" className="flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
              <div className="text-black font-light">48</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            
              <div id="comments" className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className="text-black text-lg">9</div>
              </div>
          </div>
        </div>
        <div id="chatterCard" className="animate-fade3SecDelay mt-2 p-2 w-full h-fill shadow-md bg-indigo-100 border border-indigo-200 rounded-2xl flex flex-row">
          <div className="flex flex-col">
            <div  className=" flex flex-row items-center gap-2 text-slate-900 font-semibold text-xl">
              <div className=" overflow-hidden h-12 w-12 rounded-full border-2 border-indigo-300">
                <Image
                  src="/what.png"
                  height={150}
                  width={150}
                  alt="user profile picture"
                />
              </div>
              <h4>pizzayeet</h4>
            </div>
            <div className="w-full p-1 text-slate-600">
              Woke up to a yard full of traffic cones. Prank or new city ordinance?
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-between m-1">
            <div id="voting" className="flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
              <div className="text-black font-light">21</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            
              <div id="comments" className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className="text-black text-lg">0</div>
              </div>
          </div>
        </div>
        <div id="chatterCard" className="animate-fade3SecDelay mt-2 p-2 w-full h-fill shadow-md bg-indigo-100 border border-indigo-200 rounded-2xl flex flex-row">
          <div className="flex flex-col">
            <div  className=" flex flex-row items-center gap-2 text-slate-900 font-semibold text-xl">
              <div className=" overflow-hidden h-12 w-12 rounded-full border-2 border-indigo-300">
                <Image
                  src="/noir.png"
                  height={150}
                  width={150}
                  alt="user profile picture"
                />
              </div>
              <h4>madisonman</h4>
            </div>
            <div className="w-full p-1 text-slate-600">
              Another sock missing post-laundry. Is there a sock black hole in my washing machine?
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-between m-1">
            <div id="voting" className="flex justify-center flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
              <div className="text-black font-light">-3</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            
              <div id="comments" className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <div className="text-black text-lg">123</div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
