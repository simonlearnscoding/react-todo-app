import React from "react";

function Task({ text }) {
  return (
    <div className="w-full px-3 py-3 flex border-slate-700 border-solid border-2 flex-row rounded-lg">
      <CheckBox />
      <div className="   h-8 flex text-xl items-center ml-3 font-sans w-max text-white">
        {text}
      </div>
      <div className="h-8 justify-center flex items-center">
        {" "}
        <div className="bg-green-200 text-grey-100 h-6 ml-2 rounded-md px-2">
          Today
        </div>{" "}
      </div>
      <div className="h-8 justify-center flex items-center">
        {" "}
        <div className="bg-green-200 text-grey-100 h-6 ml-2 rounded-md px-2">
          Today
        </div>{" "}
      </div>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="w-8 h-8  rounded-md hover:bg-gray-700 border-slate-500 border-solid border-2"></div>
  );
}

export default Task;
