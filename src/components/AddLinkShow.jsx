import { X } from "lucide-react";
import { useForm } from "react-hook-form";
function AddLinkShow({ isVisible, onClose, onSubmitData }) {
  if (!isVisible) return null;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Data is coming", data);
    onSubmitData(data);
  }

  return (
    <>
      <div className="container mx-auto h-screen fixed inset-0 backdrop-blur-sm bg-black-50 flex flex-col gap-4 justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[480px] h-[480px] bg-[#161616] p-4 flex flex-col gap-8 "
        >
          <div className="flex w-full justify-end">
            <button className="w-4 h-4" onClick={() => onClose()}>
              <X />
            </button>
          </div>
          <div className="flex flex-col gap-1 ">
            <label>Company name</label>
            <input
              {...register("companyName")}
              type="text"
              className="border-b-2 border-[#fff1f8] outline-hidden"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label>Job Position</label>
            <input
              {...register("jobPosition")}
              type="text"
              className="border-b-2 border-[#fff1f8] outline-hidden"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label>Job Link</label>
            <input
              {...register("jobLink")}
              type="url"
              className="border-b-2 border-[#fff1f8] outline-hidden"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label>Date applied</label>
            <input
              {...register("dateApplied")}
              type="text"
              className="border-b-2 border-[#fff1f8] outline-hidden"
            />
          </div>
          <button className="w-full outline-hidden py-2 bg-[#fff1f8] text-[#000000] font-semibold  ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLinkShow;
