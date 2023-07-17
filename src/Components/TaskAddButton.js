import TaskForm from "./TaskForm";
import { useState } from "react";
function TaskAddButton({ addTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTask = () => {
    // 👇️ passed function to setState
    setShowTaskForm((current) => !current);
  };

  const buttonBgColor = showTaskForm ? "bg-gray-700" : "bg-blue-500";
  const buttonTextColor = showTaskForm ? "text-gray-800  " : "text-gray-900  ";
  const hoverThings = showTaskForm
    ? "blur-sm" // TODO: look up tailwind groups hover
    : "hover:shadow-sm hover:border-2 hover:shadow-blue-400 hover:border-blue-500 hover:bg-gray-800 hover:cursor-pointer";
  // const visible = showTaskForm ? "hidden" : "";
  return (
    <div>
      <div
        id="task-button"
        onClick={toggleTask}
        onKeyDown={() => console.log("hi")} // TODO: Add keybinds
        className={`w-20 h-20 ${hoverThings}   transition-all  rounded-full fixed bottom-1 right-1 m-8 fixed ${buttonBgColor} flex justify-center items-center`}
      >
        <div className={`${buttonTextColor} text-4xl`}>+</div>
      </div>
      <TaskForm
        addTask={addTask}
        toggleTask={toggleTask}
        showTaskForm={showTaskForm}
      />
    </div>
  );
}
export default TaskAddButton;
