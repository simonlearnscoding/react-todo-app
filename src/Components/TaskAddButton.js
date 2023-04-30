import TaskForm from "./TaskForm";
import { useState } from "react";
function TaskAddButton({ addTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTask = () => {
    // 👇️ passed function to setState
    setShowTaskForm((current) => !current);
  };

  const buttonBgColor = showTaskForm ? "bg-gray-900" : "bg-blue-500";
  const buttonTextColor = showTaskForm ? "text-blue-500" : "text-white";

  return (
    <div>
      <div
        onClick={toggleTask}
        className={`w-20 h-20 rounded-full fixed bottom-1 right-1 m-8 fixed ${buttonBgColor} flex justify-center items-center`}
      >
        <div className={`${buttonTextColor} text-4xl`}>+</div>
      </div>
      <TaskForm addTask={addTask} showTaskForm={showTaskForm} />
    </div>
  );
}

export default TaskAddButton;
