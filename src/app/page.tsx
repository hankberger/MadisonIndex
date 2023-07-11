import ChatterCard from "@/components/ChatterCard";
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
        <div className="bg-white h-fill rounded-b-2xl flex flex-row items-center justify-between">
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
      <div id="chatter" className=" flex flex-col gap-3">
        <ChatterCard username="funnyguy7" content="aaasd asdasdasdasdasdas dasdasdasdasd asdasdasdasdasda wsdasdas dasdA" profilePic="/traty.png" comments={10} upvotes={100}/>
        <ChatterCard username="PigeonPatrol123" content="Heads up, the city's annual jazz festival starts next week. Don't miss out on some great music!" profilePic="/noir.png" comments={10} upvotes={100}/>
        <ChatterCard username="CityCyclist66" content="New bike lanes on 5th Ave are a game changer. Thanks to the city council for hearing us out!" profilePic="/what.png" comments={10} upvotes={100}/>
      </div>
    </main>
  );
}
