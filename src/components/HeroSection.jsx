import { useRef, useState } from "react";
import AddLinkShow from "./AddLinkShow";
import { CircleSmall, Trash2 } from "lucide-react";
import { mainFilter } from "../constants";

function HeroSection({ setActiveCard }) {
  const [openAddLink, setOpenAddLink] = useState(false);
  // const [interestedJob, setInterestedJob] = useState([]);
  const [data, setData] = useState({
    interested: [],
    applied: [],
    response: [],
    interview: [],
    final: [],
  });

  const dragItem = useRef();
  const dragContainer = useRef();

  function handleAddJob(data) {
    const newJob = { id: Date.now(), ...data };
    setData((prev) => ({
      ...prev,
      interested: [...prev.interested, newJob],
    }));

    setOpenAddLink(false);
  }



  function handleRemove(itemID){
    setData((prev)=>{
      const newData = {}
      for(let key in prev){
        newData[key] = prev[key].filter((i)=> i.id!==itemID)
      }
      return newData
    })
  }

  function handleDragStart(e, item, container) {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  }

  function handleDragEnd(e) {
    e.target.style.opacity = "1";
  }

  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    if (!item || !sourceContainer) return;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i.id !== item.id
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  return (
    <>
      <div className="container mx-auto  h-screen flex flex-col gap-4 ">
        <div className="w-full">
          <h1 className="text-2xl underline underline-offset-8 font-medium">
            My Shortlisted Jobs
          </h1>
        </div>
        {/* THIS IS THE JOB BOX - */}
        <div className="flex items-start gap-4">
          <div
            className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6"
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 items-center">
              <CircleSmall size={16} color="#fff1f8" />
              Interested
            </div>
            {/* JOB CARDS FROM HERE */}
            {data.interested.map((job) => (
              <div
                key={job.id}
                onDragStart={(e) => handleDragStart(e, job, "interested")}
                onDragEnd={handleDragEnd}
                draggable
              >
                <div className="bg-neutral-800 w-full py-4 px-4 flex flex-col gap-4">
                  <div className="flex w-full justify-start">
                    <button
                    type="button"
                  onClick={(e) => {e.stopPropagation()
                    handleRemove(job.id)}}
                  className="text-white font-bold"
                  >
                  <Trash2 size={16} />
                  </button>
                  </div>
                  <h1>{job.companyName}</h1>
                  <h4>{job.jobPosition}</h4>
                  <p>{job.jobLink}</p>
                  <p>{job.dateApplied}</p> 
                </div>
              </div>
            ))}
            <div>
              <button
                onClick={() => setOpenAddLink(true)}
                className="bg-neutral-800 w-full py-2 px-4 flex justify-items-start"
              >
                + Add Job Link
              </button>
              {/* ADDLINKSHOW COMPONENT CALLED HERE */}
              <AddLinkShow
                isVisible={openAddLink}
                onClose={() => setOpenAddLink(false)}
                onSubmitData={handleAddJob}
              />
            </div>
          </div>
{/* APPPLIED BOX */}
          <div
            className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6"
            draggable
            onDrop={(e) => handleDrop(e, "applied")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 items-center">
              <CircleSmall size={16} color="#fff1f8" />
              Applied
            </div>
            {data.applied.map((job) => (
              <div
                key={job.id}
                className="bg-neutral-800 p-3 cursor-grab"
              >
                <div className="flex w-full justify-start mb-4">
                    <button
                    type="button"
                  onClick={(e) => {e.stopPropagation()
                    handleRemove(job.id)}}
                  className="text-white font-bold cursor-pointer"
                  >
                  <Trash2 size={16} />
                  </button>
                  </div>
                <h2>{job.companyName}</h2>
                <p className="text-sm text-gray-400">{job.jobPosition}</p>
              </div>
            ))}
          </div>
{/* COMPANY RESPONSE BOX */}
          <div
            className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6"
            draggable
            onDrop={(e) => handleDrop(e, "response")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 items-center">
              <CircleSmall size={16} color="#fff1f8" />
              Company Response
            </div>
            {data.response.map((job) => (
              <div
                key={job.id}
                className="bg-neutral-800 p-3 cursor-grab"
              >
                <div className="flex w-full justify-start mb-4">
                    <button
                    type="button"
                  onClick={(e) => {e.stopPropagation()
                    handleRemove(job.id)}}
                  className="text-white font-bold cursor-pointer"
                  >
                  <Trash2 size={16} />
                  </button>
                  </div>
                <h2>{job.companyName}</h2>
                <p className="text-sm text-gray-400">{job.jobPosition}</p>
              </div>
            ))}
          </div>
{/* INTERVIEW BOX */}
          <div
            className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6"
            draggable
            onDrop={(e) => handleDrop(e, "interview")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 items-center">
              <CircleSmall size={16} color="#fff1f8" />
              Interview
            </div>
            {data.interview.map((job) => (
              <div
                key={job.id}
                className="bg-neutral-800 p-3 cursor-grab"
              >
                <div className="flex w-full justify-start mb-4">
                    <button
                    type="button"
                  onClick={(e) => {e.stopPropagation()
                    handleRemove(job.id)}}
                  className="text-white font-bold cursor-pointer"
                  >
                  <Trash2 size={16} />
                  </button>
                  </div>
                <h2>{job.companyName}</h2>
                <p className="text-sm text-gray-400">{job.jobPosition}</p>
              </div>
            ))}
          </div>
{/* FINAL OFFER */}
          <div
            className="w-2xs h-auto flex flex-col bg-[#161616] p-4 gap-6"
            draggable
            onDrop={(e) => handleDrop(e, "final")}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 items-center">
              <CircleSmall size={16} color="#fff1f8" />
              Final Offer
            </div>
            {data.final.map((job) => (
              <div
                key={job.id}
                className="bg-neutral-800 p-3 cursor-grab"
              >
                <div className="flex w-full justify-start mb-4">
                    <button
                    type="button"
                  onClick={(e) => {e.stopPropagation()
                    handleRemove(job.id)}}
                  className="text-white font-bold cursor-pointer"
                  >
                  <Trash2 size={16} />
                  </button>
                  </div>
                <h2>{job.companyName}</h2>
                <p className="text-sm text-gray-400">{job.jobPosition}</p>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
export default HeroSection;
