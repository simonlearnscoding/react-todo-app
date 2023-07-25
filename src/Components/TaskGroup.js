import React from "react";
import Task from "./Task";
function TaskGroup({ tasks, updateTaskStatus }) {
  return (
    <div className=" w-10/12 lg:w-6/12 flex justify-center items-center flex-col gap-2 h-max">
      <div className="w-full text-white text-2xl pl-2"> Tasks Today</div>
      <div className="h-1 w-full mb-2 bg-gray-700"></div>
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          taskText={task.text}
          updateTaskStatus={updateTaskStatus}
        />
      ))}
    </div>
  );
}

export default TaskGroup;
