import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ItemDetails from "../pages/ItemDetails";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import AddTask from "../pages/AddTask";
import EditPage from "../pages/EditPage";

const AllRoutes = ({ tasks, setTasks, handleAddTask, handleTaskEdit }) => {
  return (
    <div className="routes">
      <Routes>
        <Route
          path="/"
          element={<Dashboard tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/tasks/add-task"
          element={<AddTask handleAddTask={handleAddTask} />}
        />
        <Route path="/tasks/:taskId" element={<ItemDetails tasks={tasks} />} />
        <Route
          path="/tasks/edit/:taskId"
          element={<EditPage tasks={tasks} handleTaskEdit={handleTaskEdit} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
