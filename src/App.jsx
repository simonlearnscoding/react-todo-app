import "./App.css";
import { useState } from "react";
import React from "react";
import TaskAddButton from "./Components/TaskAddButton";
import TaskGroup from "./Components/TaskGroup";

function App() {
  // The Task Data Structure is here for now
  const [tasks, updateTask] = useState([]);
  const count = React.useRef(0);
  const updateTaskStatus = (id, status) => {
    console.log(tasks);
    updateTask((prevList) =>
      prevList.map((task) => (task.id === id ? { ...task, status } : task)),
    );
    console.log(tasks);
  };
  // the function to add a task

  const AddTask = (taskText) => {
    count.current += 1;
    // append a task object to the task array
    updateTask([
      ...tasks,
      {
        text: taskText,
        status: "pending",
        id: count.current,
        setStatus: updateTaskStatus,
      },
    ]);
    console.log(tasks);
  };
  const pendingTasks = React.useMemo(
    () => tasks.filter((task) => task.status === "pending"),
    [tasks],
  );
  return (
    <div className="w-screen justify-center items-center flex-col h-screen flex bg-gray-800">
      <TaskGroup tasks={pendingTasks} updateTaskStatus={updateTaskStatus} />
      {/* <Menu /> */}
      <TaskAddButton addTask={AddTask} />
    </div>
  );
}

export default App;
