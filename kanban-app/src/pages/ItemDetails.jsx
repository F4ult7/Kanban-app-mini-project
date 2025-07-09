import { Link, useParams } from "react-router-dom";
import "./ItemDetails.css"

const ItemDetails = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === taskId);

  if (!task) return <div>Task not found</div>;

  return (
    <main className="task-wrapper">
      <article className="task-card">
        <header>
          <h1 className="task-title">{task.title}</h1>
        </header>

        <section className="task-meta">
          <div className="task-field">
            <label>Assignee:</label>
            <span>{task.assignee}</span>
          </div>
          <div className="task-field">
            <label>Created:</label>
            <span>{task.createdDate}</span>
          </div>
          <div className="task-field">
            <label>Due Date:</label>
            <span>{task.dueDate}</span>
          </div>
          <div className="task-field">
            <label>Priority:</label>
            <span>{task.priority}</span>
          </div>
          <div className="task-field">
            <label>Status:</label>
            <span>{task.status}</span>
          </div>
        </section>

        <section className="task-description">
          <p>{task.description}</p>
        </section>

        <Link to={`/tasks/edit/${taskId}`}>
          <button id="editBtn">Edit</button>
        </Link>
      </article>
    </main>
  );
};

export default ItemDetails;



  //  <div>
  //     <h1>Task Details Page</h1>
  //     {taskDetail && (
  //       <>
  //         <h2>{taskDetail.title}</h2>
  //         <h2>{taskDetail.assignee}</h2>
  //         <h2>{taskDetail.createdDate}</h2>
  //         <h2>{taskDetail.description}</h2>
  //         <h2>{taskDetail.dueDate}</h2>
  //         <h2>{taskDetail.priority}</h2>
  //         <h2>{taskDetail.status}</h2>
  //            <Link to={`/tasks/edit/${taskId}`}>
  //     <button id="listEditBtn">
  //       Edit
  //     </button>
  //     </Link>
  //       </>
  //     )}
  //   </div>
