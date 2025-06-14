import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ItemDetails from "../pages/ItemDetails";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/:taskId" element={<ItemDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
