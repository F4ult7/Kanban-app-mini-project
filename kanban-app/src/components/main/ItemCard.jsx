import { Link } from "react-router-dom";

const ItemCard = ({ title, priority, dueDate, handleDelete, _id }) => {
  return (
    <>
      <div className="itemCard-text">
        <Link to={`/tasks/${_id}`}>
          <h3>Task: {title}</h3>
          <h5>Priority: {priority}</h5>
          <p>Due Date: {dueDate}</p>
        </Link>
      </div>
     <div className="btnContainer">
       <button id="listDeleteBtn" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/tasks/edit/${_id}`}>
      <button id="listEditBtn">
        Edit
      </button>
      </Link>
     </div>
    </>
  );
};
export default ItemCard;
