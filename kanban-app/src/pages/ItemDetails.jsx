import { useParams } from "react-router-dom";
import kanbanData from "../assets/kanban.json";

const ItemDetails = () => {
  const { taskId } = useParams();
  const taskDetail = kanbanData.find(
    (task) => task.id === taskId
);
  console.log(kanbanData)
  
  return <div>
    <h1>Task Details Page</h1>
    {taskDetail && (
        <>
        <h2>{taskDetail.title}</h2>
        <h2>{taskDetail.assignee}</h2>
        <h2>{taskDetail.createdDate}</h2>
        <h2>{taskDetail.description}</h2>
        <h2>{taskDetail.dueDate}</h2>
        <h2>{taskDetail.priority}</h2>
        <h2>{taskDetail.status}</h2>
        </>
    )}
  </div>;
};
export default ItemDetails;
