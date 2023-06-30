import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="flex max-w-5xl bg-white min-h-screen w-full flex-col p-4">
      <h1 className='animate-fade1SecDelay text-2xl font-normal text-black'>
        For You
      </h1>
      <div className='animate-fade1SecDelay w-full rounded-2xl bg-black h-48 overflow-hidden relative '>
            <Image
            src="/madisonSunset.png"
            alt="A picture of the Madison, WI skyline during sunset."
            className="bg-fixed h-full w-full object-cover"
            width={300}
            height={300}
            priority
            />
            {/* <div className='w-3/5 h-2/5 absolute bottom-0 right-0'>
              <h2 className='text-xl font-semibold p-3'>
                Event Name
              </h2>
            </div> */}
        </div>
        <div className='mt-5 flex flex-col justify-between items-baseline'>
          <h1 className='animate-fade3SecDelay text-2xl font-normal text-black'>
          Chatter
          </h1>
          <h3 className='animate-fade3SecDelay mt-[-4px] text-xs font-light text-indigo-400'>
            <span className='underline'>Explore More</span> &gt;
          </h3>
        </div>
        <div className='animate-fade3SecDelay flex flex-row'>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
        </div>

        <div className='animate-fade4SecDelay mt-5 flex flex-col justify-between items-baseline'>
          <h1 className='text-2xl font-normal text-black'>
          Chatter:
          </h1>
          <h3 className='mt-[-4px] text-xs font-light text-indigo-400'>
            <span className='underline'>Explore More</span> &gt;
          </h3>
        </div>
        <div className='animate-fade4SecDelay flex flex-row'>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
        </div>

        <div className='mt-5 flex flex-col justify-between items-baseline'>
          <h1 className='text-2xl font-normal text-black'>
          Chatter:
          </h1>
          <h3 className='mt-[-4px] text-xs font-light text-indigo-400'>
            <span className='underline'>Explore More</span> &gt;
          </h3>
        </div>
        <div className='flex flex-row'>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
        </div>

        <div className='mt-5 flex flex-col justify-between items-baseline'>
          <h1 className='text-2xl font-normal text-black'>
          Chatter:
          </h1>
          <h3 className='mt-[-4px] text-xs font-light text-indigo-400'>
            <span className='underline'>Explore More</span> &gt;
          </h3>
        </div>
        <div className='flex flex-row'>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
          <div className='mt-2 w-64 h-48 bg-black rounded-2xl'>

          </div>
        </div>
    </main>
  )
}
