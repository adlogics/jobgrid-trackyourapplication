import { X } from "lucide-react"
function AddLinkShow({isVisible, onClose}) {
    if(!isVisible) return null;

  return (
    <>
    <div className='container mx-auto h-screen fixed inset-0 backdrop-blur-sm bg-black-50 flex flex-col gap-4 justify-center items-center'>
        <div className="w-[480px] h-[480px] bg-[#161616] p-4 flex flex-col gap-8 ">
            <div className="flex w-full justify-end">
            <button className="w-4 h-4" onClick={()=>onClose()}><X /></button>
            </div>
            <div className="flex flex-col gap-1 ">
                <h1>Company name</h1>
                <input type="text" className="border-b-2 border-[#fff1f8] outline-hidden"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <h1>Job Position</h1>
                <input type="text" className="border-b-2 border-[#fff1f8] outline-hidden"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <h1>Job Link</h1>
                <input type="text" className="border-b-2 border-[#fff1f8] outline-hidden"/>
            </div>
            <div className="flex flex-col gap-2 ">
                <h1>Date applied</h1>
                <input type="url" className="border-b-2 border-[#fff1f8] outline-hidden"/>
            </div>
            <button className="w-full outline-hidden py-2 bg-[#fff1f8] text-[#000000] font-semibold  ">Submit</button>
        </div>
    </div>




    </>
  )
}

export default AddLinkShow