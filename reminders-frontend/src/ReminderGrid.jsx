import React, { useEffect, useState } from "react";
import axios from "axios";
import ReminderComponent from "./ReminderComponent";

const ReminderGrid = () => {
  

  // useEffect(() =>{
  //   axios.get()
  // })

  return (
    <div className="items-center flex flex-col h-full gap-10">
      <div className="text-2xl font-extrabold">Reminders</div>
      <div className="grid grid-cols-3 gap-5">
        <ReminderComponent />
      </div>
    </div>
  );
};

export default ReminderGrid;
