// check the inport (worked)
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTaskForm = ({ handleAddTask }) => {
  const navigate = useNavigate();
  // Vars  & setters added
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    assignee: "",
    status: "",
    priority: "",
    createdDate: "",
    dueDate: "",
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    const val = type === "checked" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(formData);
    setFormData({
      title: "",
      description: "",
      assignee: "",
      status: "",
      priority: "",
      createdDate: "",
      dueDate: "",
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title} // added
          placeholder="Title"
          onChange={handleChange} // added
          required
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Assignee
        <input
          type="text"
          name="assignee"
          value={formData.assignee}
          placeholder="Assignee"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Created date
        <input
          type="date"
          name="createdDate"
          value={formData.createdDate}
          placeholder="Created Date"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Due date
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          placeholder="Due Date"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        {/* select - here  */}
        Priority
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        {/* select - here  */}
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Select status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default AddTaskForm;
