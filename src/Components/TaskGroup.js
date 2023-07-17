import React from "react";
import Task from "./Task";
function TaskGroup({ tasks }) {
  let pendingTasks = tasks.filter((task) => task.status === "pending");
  return (
    <div className=" w-10/12 lg:w-6/12 flex justify-center items-center flex-col gap-2 h-max">
      <div className="w-full text-white text-2xl pl-2"> Tasks Today</div>
      <div className="h-1 w-full mb-2 bg-gray-700"></div>
      {pendingTasks.map((task, index) => (
        <Task
          key={index}
          taskText={task.text}
          status={task.status}
          setStatus={task.setStatus}
        />
      ))}
    </div>
  );
}

export default TaskGroup;
