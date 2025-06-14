import { useState } from "react";
import kanbanData from "../../assets/kanban.json";
import ItemCard from "./ItemCard";

const Content = () => {
  const [tasks, setTasks] = useState(kanbanData);

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="mainContentContainer">
      <article id="article">
        <h2>To Do</h2>
        {tasks
          .filter((task) => task.status === "To Do")
          .map((task) => (
            <div className="List" id="todoList" key={task.id}>
              <ItemCard
                title={task.title}
                priority={task.priority}
                dueDate={task.dueDate}
                handleDelete={() => handleDelete(task.id)}
              />
            </div>
          ))}
      </article>
      <article id="article">
        <h2>In Progress</h2>
        {tasks
          .filter((task) => task.status === "In Progress")
          .map((task) => (
            <div className="List" id="inProgress" key={task.id}>
              <ItemCard
                title={task.title}
                priority={task.priority}
                dueDate={task.dueDate}
                handleDelete={() => handleDelete(task.id)}
              />
            </div>
          ))}
      </article>
      <article id="article">
        <h2>Done</h2>
        {tasks
          .filter((task) => task.status === "Done")
          .map((task) => (
            <div className="List" id="doneList" key={task.id}>
              <ItemCard
                title={task.title}
                priority={task.priority}
                dueDate={task.dueDate}
                handleDelete={() => handleDelete(task.id)}
              />
            </div>
          ))}
      </article>
    </div>
  );
};

export default Content;
