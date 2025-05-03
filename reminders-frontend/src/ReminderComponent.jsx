import React from "react";

const ReminderComponent = () => {
  // const {id, status, text, remindOn} = props
  return (
    <div className="bg-[#81F4E1] h-55 w-65 rounded-2xl border-[1.5px] hover:border-2  flex flex-col pt-2">
      <div className="px-4 py-2 font-extrabold text-[18px]">COMPLETE</div>
      <div className="bg-white h-full rounded-2xl px-4 py-2 flex flex-col justify-between items-center">
        <span className="font-bold font-sans">
          Task:{" "}
          <span className="font-medium font-mono">Finish washing clothes</span>
        </span>
        <span>
          <p className="my-2">Remind me: </p>
          <span className="font-bold font-sans">Date: </span> 27/08/2025
        </span>
        <div className="flex flex-row items-center gap-4">
          <button className="bg-red-400 font-extrabold w-1/2 rounded-sm px-2 py-1 hover:bg-red-500">
            Delete
          </button>
          <button className="bg-green-300 font-extrabold w-1/2 rounded-sm px-2 py-1 hover:bg-red-500">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReminderComponent;
