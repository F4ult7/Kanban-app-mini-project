import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { useState } from "react";
import kanbanData from "../src/assets/kanban.json";

function App() {
  const [tasks, setTasks] = useState(kanbanData);
    function handleAddTask(newTask){
        setTasks((prev)=> [newTask, ...prev])
    }

    function handleTaskEdit(editedTask){
      setTasks((prev)=> 
        [editedTask, ...prev.filter(task => task.id !== editedTask.id)])

    }
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <div id="pageContainer">
          <Sidebar  />
        <AllRoutes tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} handleTaskEdit={handleTaskEdit} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
