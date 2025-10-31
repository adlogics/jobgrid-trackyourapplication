import { useState } from "react";
import AddLinkShow from "./AddLinkShow";
import {  CircleSmall } from "lucide-react";
import { mainFilter } from "../constants";

function HeroSection() {
    const [openAddLink, setOpenAddLink] = useState(false)


  return (
    <>
    <div className="container h-screen flex flex-col gap-16 ">
      <div className="w-full">
        <h1 className="text-2xl underline underline-offset-8 font-medium">
          My Shortlisted Jobs
        </h1>
      </div>
      {/* THIS IS THE JOB BOX - */}
      <div className="flex items-start gap-4">
        <div className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6">
          <div className="flex gap-2 items-center"><CircleSmall size={16} color="#fff1f8"/>Interested</div>
          <div className="bg-neutral-800 w-full py-2 px-4 flex flex-col gap-4">
            <select className="border-0 bg-transparent appearance-none outline-hidden focus:ring-0 focus:outline-none"> 
              {mainFilter.map((val,key)=>(
                <option key={key} value={val} className="bg-neutral-800 outline-hidden border-0">{val}</option>
              ))}
            </select>
            <h1>Job Title</h1>
          </div>
          <div> 
            <button onClick={()=>setOpenAddLink(true)} className="bg-neutral-800 w-full py-2 px-4 flex justify-items-start">
              + Add Job Link
            </button>
            <AddLinkShow isVisible={openAddLink} onClose={()=>setOpenAddLink(false)} />
          </div>
        </div>

        <div className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6">
          <div className="flex gap-2 items-center"><CircleSmall size={16} color="#fff1f8"/>Applied</div>
        </div>

        <div className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6">
          <div className="flex gap-2 items-center"><CircleSmall size={16} color="#fff1f8"/>Company response</div>
        </div>

        <div className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6">
          <div className="flex gap-2 items-center"><CircleSmall size={16} color="#fff1f8"/>Interview Rounds</div>
        </div>

        <div className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6">
          <div className="flex gap-2 items-center"><CircleSmall size={16} color="#fff1f8"/>Final Offer</div>
        </div>
      </div>
    </div>
    </>
  );
}
export default HeroSection;
