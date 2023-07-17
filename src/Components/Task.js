import React, { useState } from "react";

function Task({ taskText, status, setStatus }) {
  return (
    <div className="w-full px-3 py-3 flex border-slate-700 border-solid border-2 flex-row rounded-lg">
      <CheckBox setStatus={setStatus} />
      <div className="h-8 flex text-xl grow items-center ml-3 font-sans w-max text-white">
        {taskText}
      </div>
      <div className="h-8 justify-end  flex items-center">
        <div className="bg-green-200 text-grey-100 h-6 ml-2 rounded-md px-2"></div>
      </div>
    </div>
  );
}

function CheckBox({ setStatus }) {
  const handleClick = () => {
    console.log("clicked on done");
    setStatus("done");
  };

  return (
    <div
      onClick={handleClick}
      className="w-8 h-8 rounded-md hover:bg-gray-700 border-slate-500 border-solid border-2"
    ></div>
  );
}

export default Task;
