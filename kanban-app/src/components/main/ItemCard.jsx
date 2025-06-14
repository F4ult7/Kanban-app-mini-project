import { Link } from "react-router-dom";

const ItemCard = ({ title, priority, dueDate, handleDelete, _id }) => {
  return (
    <Link to={`/tasks/${_id}`}>
    <div>
      <h3>Task: {title}</h3>
      <h5>Priority: {priority}</h5>
      <p>Due Date: {dueDate}</p>
      <div>
        <button id="listDeleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
    </Link>
  );
};
export default ItemCard;
