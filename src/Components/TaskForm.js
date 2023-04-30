import { useState, useEffect } from "react";
function TaskForm({ addTask, showTaskForm }) {
  const [taskInput, setTaskInput] = useState("");

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput("");
  };
  if (showTaskForm) {
    return (
      <form onSubmit={handleTaskSubmit} className="...">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter text here"
          className="fixed bottom-0 mb-20  transform -translate-x-1/2 left-1/2 w-11/12 lg:w-6/12 h-16 bg-gray-900 text-white text-2xl px-3 py-3 rounded-t-lg"
        />
      </form>
    );
  } else {
    return null;
  }
}

export default TaskForm;
