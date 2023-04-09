import "./App.css";

function App() {
  return (
    <div className="w-screen justify-center items-center  h-screen flex bg-gray-800">
      <TaskGroup />
    </div>
  );
}
function TaskGroup() {
  return (
    <div className=" w-10/12 flex justify-center items-center flex-col gap-2 h-max">
      <div className="w-full text-white text-2xl pl-2"> Tasks Today</div>
      <div className="h-1 w-full mb-2 bg-gray-700"></div>
      <Task />
      <Task />
      <Task />
    </div>
  );
}

function CheckBox() {
  return (
    <div className="w-8 h-8  rounded-md hover:bg-gray-700 border-slate-500 border-solid border-2"></div>
  );
}
function Task() {
  return (
    <div className="w-full px-3 py-3 flex border-slate-700 border-solid border-2 flex-row rounded-lg">
      <CheckBox />
      <div className="   h-8 flex text-xl items-center ml-3 font-sans w-max text-white">
        {" "}
        Daily Routine{" "}
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
export default App;
