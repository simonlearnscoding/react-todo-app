import React, { useState } from "react";

function Task({ taskText, updateTaskStatus, id }) {
  return (
    <div className="w-full px-3 py-3 flex border-slate-700 border-solid border-2 flex-row rounded-lg">
      <CheckBox id={id} updateTaskStatus={updateTaskStatus} />
      <div className="h-8 flex text-xl grow items-center ml-3 font-sans w-max text-white">
        {taskText}
      </div>
      <div className="h-8 justify-end  flex items-center">
        <div className="bg-green-200 text-grey-100 h-6 ml-2 rounded-md px-2"></div>
      </div>
    </div>
  );
}
function CheckBox({ id, updateTaskStatus }) {
  function handleClick(id) {
    console.log(`youve clicked ${id} `);
    updateTaskStatus(id);
  }
  return (
    <div
      onClick={() => handleClick(id)}
      className="w-8 h-8 rounded-md hover:bg-gray-700 border-slate-500 border-solid border-2"
    ></div>
  );
}

export default Task;
