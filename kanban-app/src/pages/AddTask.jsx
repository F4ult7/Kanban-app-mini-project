import AddTaskForm from "../components/addTask/AddTaskForm";

const AddTask = ({ handleAddTask }) => {
  return (
    <>
      <h2>Add a task</h2>
      <AddTaskForm handleAddTask={handleAddTask} />
    </>
  );
};
export default AddTask;
