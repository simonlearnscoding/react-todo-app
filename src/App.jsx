import "./App.css";
import { useState } from "react";
import TaskAddButton from "./Components/TaskAddButton";
import TaskForm from "./Components/TaskForm";
import TaskGroup from "./Components/TaskGroup";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText }]);
  };

  return (
    <div className="w-screen justify-center items-center flex-col h-screen flex bg-gray-800">
      <TaskGroup tasks={tasks} />
      {/* <Menu /> */}
      <TaskAddButton addTask={addTask} />
    </div>
  );
}

export default App;
