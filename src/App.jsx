import "./App.css";
import { useState } from "react";
import TaskAddButton from "./Components/TaskAddButton";
import TaskForm from "./Components/TaskForm";
import TaskGroup from "./Components/TaskGroup";

function App() {
  const [tasks, createTask] = useState([]);
  const AddTask = (taskText, status, setStatus) => {
    // append a task object to the task array
    createTask([...tasks, { taskText, status, setStatus }]);
    console.log(tasks);
  };

  return (
    <div className="w-screen justify-center items-center flex-col h-screen flex bg-gray-800">
      // Display Taskgroup and pass the tasks array
      <TaskGroup tasks={tasks} />
      {/* <Menu /> */}
      <TaskAddButton addTask={AddTask} />
    </div>
  );
}

export default App;
