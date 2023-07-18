import { FormEventHandler } from "react";

export default function Post() {
    // const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(event);
    //     };

  return (
   <div>
     <h1 className=' text-slate-700 text-2xl'>New Post</h1>
     <div className='p-1 flex flex-row items-center justify-between bg-slate-100 rounded-lg overflow-hidden mt-2'>
        <h3 className='text-slate-400 rounded-lg basis-1/4 flex justify-center items-center'>
            Chatter
        </h3>
        <h3 className='bg-indigo-400 rounded-lg basis-1/4 flex justify-center items-center'>
            Event
        </h3>
        <h3 className='text-slate-400 rounded-lg basis-1/4 flex justify-center items-center'>
            Market
        </h3>
        <h3 className='text-slate-400 rounded-lg basis-1/4 flex justify-center items-center'>
            Explore
        </h3>
     </div>
     {/* <form className="mt-4" onSubmit={handleSubmit}>
        <label>
            Event Name:
            <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
            Date:
            <input type="date" name="date" onChange={handleInputChange} />
        </label>
        <label>
            Start Time:
            <input type="time" name="startTime" onChange={handleInputChange} />
        </label>
        <label>
            End Time:
            <input type="time" name="endTime" onChange={handleInputChange} />
        </label>
        <label>
            Description:
            <textarea name="description" onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
     </form> */}
   </div>
  )
}
